//login
exports.login = async (req, res) => {
  try {
    res.send("Hello From login");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//register
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username) {
      return res.status(400).json({ message: "Username is required!!!" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required!!!" });
    }

    //check username in db already

    console.log(username, password);
    res.send("Hello From register");
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
