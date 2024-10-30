const express = require("express");
const router = express.Router();
const { create, list, remove,update } = require("../controllers/buildings");

router.post("/buildings", create);
router.get("/buildings", list);
router.delete("/buildings/:id", remove);
router.put("/buildings/:id", update);

module.exports = router;
