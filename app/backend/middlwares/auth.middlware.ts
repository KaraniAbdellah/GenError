import { NextFunction, Request, RequestHandler, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";

import config from "../config/config";

export const authMiddlware: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.headers.authorization?.split(" ")[1]);
  try {
    const token: string= req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(404).json({ message: "Token Does Not Found" });
    }
    const decoded: JwtPayload | string = jwt.verify(token, config.secret_key);
    if (!decoded || typeof decoded === "string") {
      return res
        .status(400)
        .json({ message: "Decoding Token Failed Operation!" });
    }
    // req.user = decoded.user;
    return next();
  } catch (error) {
    return res.status(401).send("Please authenticate");
  }
};
