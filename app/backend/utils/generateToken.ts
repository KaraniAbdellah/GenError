import { userType } from "../models/types";
import jwt from "jsonwebtoken";
import config from "../config/config";
import { Response } from "express";

const generateToken = (user: userType | null, res: Response) => {
  if (user) {
    const userToSend = {
      name: user?.name,
      email: user?.email,
    };
    const token: string = jwt.sign({ user: userToSend }, config.secret_key, {
      expiresIn: config.token_time,
    });
    res.cookie("user_token", {
      httpOnly: true,
      secure: true, // send cookie under https
      sameSite: "None", // Allows cross-site cookies
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });
    return token;
  } else return null;
};
export default generateToken;
