const express = require("express");
const router = express.Router();
const { create, list, remove, update } = require("../controllers/employees");

router.post("/employees", create);
router.get("/employees", list);
router.delete("/employees/:id", remove);
router.put("/employees/:id", update);

module.exports = router;
