const express = require("express");
const router = express.Router();
const { login, register, currentUser } = require("../controllers/auth"); //import from controllers

//path,file from import
router.post("/login", login);
router.post("/register", register);
router.post("/current-user", currentUser);
router.post("/current-Admin", currentUser);

module.exports = router;
