import { NextFunction, Request, Response } from "express";

export const authMiddlware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.user = {
    name: "Abdellah",
    email: "abdellahkarani@gmail.com",
    password: "AB29Sk0{",
  };
  return next();
};
