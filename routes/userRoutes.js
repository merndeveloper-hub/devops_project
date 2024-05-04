const express = require("express");

const authController = require("../controllers/authController");

const router = express.Router();

router.route.post("/signup", authController.signUp);
router.route.post("/login", authController.login);

module.exports = router;