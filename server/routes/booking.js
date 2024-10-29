const express = require("express");
const router = express.Router();
const { create, list, remove } = require("../controllers/booking");

router.post("/booking", create);
router.get("/booking", list);
router.delete("/booking/:id", remove);

module.exports = router;
