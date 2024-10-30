const prisma = require("../config/prisma");

exports.create = async (req, res) => {
  try {
    const { name, building_id, floor, capacity, type } = req.body;
    const rooms = await prisma.rooms.create({
      data: {
        name: name,
        building_id: parseInt(building_id),
        floor: parseInt(floor),
        capacity: parseInt(capacity),
        type: type,
      },
    });
    res.send(rooms);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.list = async (req, res) => {
  try {
    const rooms = await prisma.rooms.findMany({
      include: {
        building: true,
      },
    });
    res.send(rooms);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const rooms = await prisma.rooms.delete({
      where: {
        id: Number(id),
      },
    });
    res.send(rooms);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
