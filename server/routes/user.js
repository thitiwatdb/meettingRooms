const express = require("express");
const router = express.Router();

router.get("/users");
router.post("/change-status");
router.post("/change-role");

router.post("user/booking");
router.get("/user/booking");
router.delete("/user/booking");

module.exports = router;
