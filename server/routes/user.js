const express = require("express");
const router = express.Router();
const { authCheck } = require("../middlewares/authCheck");
const { listUsers } = require("../controllers/user");

router.get("/users", authCheck, listUsers);
router.post("/change-status");
router.post("/change-role");

router.post("user/booking");
router.get("/user/booking");
router.delete("/user/booking");

module.exports = router;
