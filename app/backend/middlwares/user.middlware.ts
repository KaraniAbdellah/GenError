import { NextFunction, Request, RequestHandler, Response } from "express";

export const authMiddlware: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;
    console.log(user);

    return next();
  } catch (error) {
    return res.status(401).send("Please authenticate");
  }
};
