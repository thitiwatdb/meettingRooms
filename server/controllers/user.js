exports.listUsers = async (req, res) => {
  try {
    //code
    res.send("OK list user");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.changeStatus = async (req, res) => {
  try {
    //code
    res.send("OK change status");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.changeRole = async (req, res) => {
  try {
    //code
    res.send("OK change role");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.userBooking = async (req, res) => {
  try {
    //code
    res.send("OK user booking");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getUserBooking = async (req, res) => {
  try {
    //code
    res.send("OK get user booking");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.saveUserBooking = async (req, res) => {
  try {
    //code
    res.send("OK save user booking");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    //code
    res.send("OK cancel booking");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
