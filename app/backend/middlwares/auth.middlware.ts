import { NextFunction, Request, Response } from "express";

export const authMiddlware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  (req as any).user = "Hello";

  next();
};
