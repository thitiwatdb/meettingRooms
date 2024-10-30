const express = require("express");
const router = express.Router();
const { create, list, remove ,update } = require("../controllers/rooms");

router.post("/rooms", create);
router.get("/rooms", list);
router.delete("/rooms/:id", remove);
router.put("/rooms/:id", update);

module.exports = router;
