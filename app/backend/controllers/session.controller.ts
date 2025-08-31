import { Request, Response, RequestHandler } from "express";
import { sessionType, userType } from "../models/types";

export const addSession: RequestHandler = (req: Request, res: Response) => {
  try {
    const user: userType | undefined = req.user;
    console.log(user);
    if (!user) {
      return res.status(404).send({ message: "user ot found" });
    }
    // Create a Session
    const newSession: sessionType = {
      session_name: "Name From Error",
      user_email: user.email,
    };

    console.log(newSession);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message });
    } else {
      return res.status(500).send({ message: "Unexpected error" + error });
    }
  }
};
