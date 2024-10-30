const express = require("express");
const router = express.Router();
const { authCheck, adminCheck } = require("../middlewares/authCheck");
const {
  listUsers,
  changeRole,
  changeStatus,
  userBooking,
  getUserBooking,
  cancelBooking,
} = require("../controllers/user");

router.get("/users", authCheck, adminCheck, listUsers);
router.post("/change-status", authCheck, adminCheck, changeStatus);
router.post("/change-role", authCheck, adminCheck, changeRole);

router.post("/user/booking", authCheck, userBooking);
router.get("/user/booking", authCheck, getUserBooking);
router.delete("/user/booking", authCheck, cancelBooking);

module.exports = router;
