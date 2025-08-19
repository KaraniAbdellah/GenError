// create user controller

import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const userClient = new PrismaClient().user;

// Get User
export const get_user = (req: Request, res: Response) => {
  
  return res.status(200).send({ message: "Hello User" });
};
