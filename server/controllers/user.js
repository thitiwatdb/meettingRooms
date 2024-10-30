exports.listUsers = async (req, res) => {
  try {
    //code
    res.send("OK");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
