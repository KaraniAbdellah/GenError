import { NextFunction, Request, RequestHandler, Response } from "express";
import { PrismaClient } from "@prisma/client";

// import types
import { userType } from "../models/types";
// import { AuthRequest } from "../custom_types/AuthRequest";

const userClient = new PrismaClient().user;

// Get User
export const addUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    // const newUser: userType = req.body;
    const newUser: userType = {
      name: "Ahmed",
      email: "a@gmail.com",
      password: "1010292",
    };

    // Check if user already login --> we can not push into database
    const user: userType | null = await userClient.findUnique({
      where: {
        email: newUser.email,
      },
    });
    if (user) {
      return res.status(200).json({message: "User Already Exit"});
    }

    // Push User to Database
    const auth_user = await userClient.create({
      // prisma create new user with id, ...
      data: newUser,
    });
    return res.status(200).send({ NewUser: auth_user });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message });
    } else {
      return res.status(500).send({ message: "Unexpected error" + error });
    }
  }
};
