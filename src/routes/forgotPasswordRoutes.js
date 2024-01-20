const express = require("express");
const router = express.Router();
const ForgotPasswordController = require("../controllers/forgotPasswordController");

router.post("/forgot", ForgotPasswordController.initiateForgotPassword);
router.post("/verify", ForgotPasswordController.verifyOTP);

module.exports = router;
