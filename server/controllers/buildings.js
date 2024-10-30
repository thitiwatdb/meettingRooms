const prisma = require("../config/prisma");

exports.create = async (req, res) => {
  try {
    const { name, floorCount } = req.body;
    const buildings = await prisma.buildings.create({
      data: {
        name: name,
        floorCount: floorCount,
      },
    });
    res.send(buildings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.list = async (req, res) => {
  try {
    const buildings = await prisma.buildings.findMany();
    res.send(buildings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const buildings = await prisma.buildings.delete({
      where: {
        id: Number(id),
      },
    });
    res.send(buildings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
