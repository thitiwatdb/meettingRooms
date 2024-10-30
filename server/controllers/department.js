const prisma = require("../config/prisma");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const department = await prisma.departments.create({
      data: {
        name: name,
      },
    });
    res.send(department);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.list = async (req, res) => {
  try {
    const department = await prisma.departments.findMany();
    res.send(department);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await prisma.departments.delete({
      where: {
        id: Number(id),
      },
    });
    res.send(department);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
