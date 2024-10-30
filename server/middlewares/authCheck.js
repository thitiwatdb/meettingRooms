const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma");

exports.authCheck = async (req, res, next) => {
  try {
    //step 1 check header token
    const headerToken = req.headers.authorization;
    if (!headerToken) {
      return res.status(401).json({ message: "No token,authorization " });
    }

    //step 2 verify token
    const token = headerToken.split(" ")[1];
    const decode = jwt.verify(token, process.env.SECRET);
    req.user = decode;

    //step 3 check username from db
    const user = await prisma.user.findFirst({
      where: {
        username: req.user.username,
      },
    });

    if (!user.status) {
      return res.status(400).json({ message: "This account cannot access" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Token Invalid" });
  }
};
