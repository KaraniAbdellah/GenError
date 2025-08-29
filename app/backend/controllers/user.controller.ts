import { Request, RequestHandler, Response } from "express";
import { PrismaClient } from "@prisma/client";
import generateToken from "../utils/generateToken";
import bcrypt from "bcrypt";

// import types
import { userType } from "../models/types";
// import { AuthRequest } from "../custom_types/AuthRequest";

const userClient = new PrismaClient().user;

// Get User
export const addUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const newUser: userType = req.body;
    // const newUser: userType = {
    //   name: "Ahmed",
    //   email: "a1200@gmail.com",
    //   password: "19192339002",
    // };

    // Check if user already login --> we can not push into database
    const user: userType | null = await userClient.findUnique({
      where: {
        email: newUser.email
      },
    });
    if (user) {
      return res.status(200).json({ user: user, message: "user already exit" });
    }

    // Encrypt The Password
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashedPassword;

    // Push User to Database
    const auth_user: userType = await userClient.create({
      // prisma create new user with id (auto), ...
      data: newUser,
      include: {
        Sessions: {
          include: {
            Prompts: {
              include: {
                Output: true,
              },
            },
          },
        },
      },
    });

    // Generate A Token for user
    const token = generateToken(auth_user);
    console.log(token);

    return res.status(200).send({ user_token: token });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message });
    } else {
      return res.status(500).send({ message: "Unexpected error" + error });
    }
  }
};
