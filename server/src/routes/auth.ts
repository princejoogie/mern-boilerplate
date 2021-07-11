import express from "express";
import {
  loginController,
  registerController,
  forgotPasswordController,
  resetPasswordController,
} from "../controllers/auth";

const router = express.Router();

router.route("/register").post(registerController);
router.route("/login").post(loginController);
router.route("/forgotpassword").post(forgotPasswordController);
router.route("/resetpassword/:resetToken").post(resetPasswordController);

export default router;
