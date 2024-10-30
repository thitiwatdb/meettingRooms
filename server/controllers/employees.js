const prisma = require("../config/prisma");

exports.create = async (req, res) => {
  try {
    const { userID, firstname, lastname, departmentID, position } = req.body;
    const employees = await prisma.employees.create({
      data: {
        userID: parseInt(userID),
        firstname: firstname,
        lastname: lastname,
        departmentID: parseInt(departmentID),
        position: position,
      },
    });
    res.send(employees);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.list = async (req, res) => {
  try {
    const employees = await prisma.employees.findMany({
      include: {
        user: true,
        department: true,
        Bookings: true,
        Cancellations: true,
      },
    });
    res.send(employees);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const employees = await prisma.employees.delete({
      where: {
        id: Number(id),
      },
    });
    res.send(employees);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, departmentID, position } = req.body;
    const employees = await prisma.employees.update({
      where: {
        id: Number(id),
      },
      data: {
        firstname: firstname,
        lastname: lastname,
        departmentID: parseInt(departmentID),
        position: position,
      },
    });
    res.send(employees);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
