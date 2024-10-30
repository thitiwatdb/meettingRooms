const express = require("express");
const router = express.Router();
const { create, list, remove } = require("../controllers/department");

router.post("/department", create);
router.get("/department", list);
router.delete("/department/:id", remove);

module.exports = router;
