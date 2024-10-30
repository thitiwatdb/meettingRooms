const express = require("express");
const router = express.Router();
const { create, list, remove } = require("../controllers/buildings");

router.post("/buildings", create);
router.get("/buildings", list);
router.delete("/buildings/:id", remove);

module.exports = router;
