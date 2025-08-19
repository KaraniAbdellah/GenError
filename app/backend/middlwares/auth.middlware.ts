import { NextFunction, Request, Response } from "express";
import { Token } from "typescript";

export const authMiddlware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

    // const token: Token = req.cookies.token;

    next();
};
