import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


// import types
import { userType } from "../models/types";

const userClient = new PrismaClient().user;

// Get User
export const get_user = async (req: Request, res: Response) => {
  try {
    const newUser: userType = {
      name: "Ahmed",
      email: "a@gmail.com",
      password: "1010292",
    };
    // Push User to Database 
    const auth_user = await userClient.create({ // prisma create new user with id, ...
      data: newUser
    });

    return res.status(200).send({ NewUser: auth_user });
  } catch (error: Error) {
    return res.status(500).send({ message: error.message });
  }
};
