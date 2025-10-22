import { NextFunction, Request, RequestHandler, Response } from "express";
import { userType } from "../models/types";
import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient().user;
export const userMiddlware: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Hello From user Middlware");
    const user: userType | undefined = req.user;
    if (!user) {
      return res.status(200).send({ message: "user not found" });
    }
    const IsUserExit: userType | null = await userClient.findUnique({
      where: {
        name: user.name,
        email: user.email,
      },
    });

    if (!IsUserExit) {
      return res
        .status(404)
        .send({ message: "user does not exit in database" });
    }
    req.user = IsUserExit;
    return next();
  } catch (error) {
    return res.status(401).send("Please authenticate");
  }
};
