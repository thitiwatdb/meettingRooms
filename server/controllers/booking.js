//create
exports.create = async (req, res) => {
  try {
    res.send("Hello From booking create");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//list
exports.list = async (req, res) => {
  try {
    res.send("Hello From booking list");
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
    res.send("Hello From booking remove");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
