import { NextFunction, Request, RequestHandler, Response } from "express";
import { userType } from "../models/types";
import jwt from "jsonwebtoken";
import { Payload } from "@prisma/client/runtime/library";

export const authMiddlware: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token; // this return an object
    if (!token) {
      return res.status(404).json({ message: "Token Does Not Found" });
    }
    const decoded: Payload = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res
        .status(400)
        .json({ message: "Decoding Token Failed Operation!" });
    }

    req.user = decoded.user;

    next();

    req.user = {
      name: "Abdellah",
      email: "abdellahkarani@gmail.com",
      password: "AB29Sk0{",
    };
    return next();
  } catch (error) {
    res.status(401).send("Please authenticate");
  }
};
