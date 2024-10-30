const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    //step 1 check username
    const user = await prisma.User.findFirst({
      where: {
        username: username,
      },
    });
    if (!user || !user.status) {
      return res
        .status(400)
        .json({ message: "username not found or not active" });
    }

    //step 2 check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "password invalid!!!" });
    }

    //step 3 create payload
    const payload = {
      id: user.id,
      username: user.username,
      role: user.role,
      status: user.status,
    };

    //step 4 generate token
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) {
          return res.status(500).json({ message: "Server Error" });
        }
        res.json({ payload, token });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//register
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // step 1 Validate body
    if (!username) {
      return res.status(400).json({ message: "Username is required!!!" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required!!!" });
    }

    //step 2 check username in db already
    const user = await prisma.User.findFirst({
      where: {
        username: username,
      },
    });
    if (user) {
      return res.status(400).json({ message: "Username already exits!!!" });
    }

    //step 3 HashPassword
    const hashPassword = await bcrypt.hash(password, 10);

    //step 4 Register
    await prisma.User.create({
      data: {
        username: username,
        password: hashPassword,
      },
    });

    res.send("register complete");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//current user
exports.currentUser = async (req, res) => {
  try {
    res.send("Hello From currentUser");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
