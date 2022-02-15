const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const handlerFactory = require("../controllers/handlerFactory");
const { protect } = require("../middlewares/auth");
const User = require("../models/userModel");

const router = express.Router();

router.post("/signup", authController.signupUser);
router.post("/login", authController.loginUser);
router.get("/logout", handlerFactory.logout);

router.post("/forgotPassword", authController.forgotPasswordUser);
router.patch("/resetPassword/:token", authController.resetPasswordUser);

router.get("/me", protect(User), userController.getMe);

router.patch("/updateMe", protect(User), userController.updateMe);

router.route("/").get(userController.getAllUsers);
router.route("/:id").get(userController.getUser);

module.exports = router;
