import { Request, Response, NextFunction } from "express";

export const registerController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Register Route");
};

export const loginController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Login Route");
};

export const forgotPasswordController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Forgot Password Route");
};

export const resetPasswordController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Reset Password Route");
};
