const express = require("express");
const router = express.Router();
const { create, list, remove } = require("../controllers/rooms");

router.post("/rooms", create);
router.get("/rooms", list);
router.delete("/rooms/:id", remove);

module.exports = router;
