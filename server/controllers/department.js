exports.create = async (req, res) => {
  try {
    res.send("Hello From department create");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//list
exports.list = async (req, res) => {
  try {
    res.send("Hello From department list");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//remove
exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    res.send("Hello From department remove");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
