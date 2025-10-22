import { Request, RequestHandler, Response } from "express";
import { PrismaClient } from "@prisma/client";
import generateToken from "../utils/generateToken";
import { userType, userCreateType } from "../models/types";

const userClient = new PrismaClient().user;

export const addUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const newUser: userCreateType = req.body;
    console.log(newUser);

    // Check if user already login --> we can not push into database
    const user: userType | null = await userClient.findUnique({
      where: {
        email: newUser.email,
      },
    });
    if (user) {
      const token = generateToken(user, res);
      return res
        .status(200)
        .send({ user_token: token, message: true });
    }

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
    const token = generateToken(auth_user, res);

    return res.status(200).send({ user_token: token });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message });
    } else {
      return res.status(500).send({ message: "Unexpected error" + error });
    }
  }
};

export const getUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const AuthUser: userCreateType | undefined = req.user;
    console.log("Hello User");

    if (!AuthUser) {
      return res.status(404).send({ message: "User Not Found" });
    }

    const user: userType | null = await userClient.findUnique({
      where: {
        email: AuthUser.email,
      },
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
    if (!user) {
      return res.status(404).send({ message: "we can not find user" });
    }

    return res.status(200).send({ ...user, message: "Welcome Again" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message });
    } else {
      return res.status(500).send({ message: "Unexpected error" + error });
    }
  }
};
