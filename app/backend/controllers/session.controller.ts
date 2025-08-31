import { Request, Response, RequestHandler } from "express";
import { userType } from "../models/types";

export const addSession: RequestHandler = (req: Request, res: Response) => {
  try {
    const user: userType = req.user;
    console.log(user);
    // Create a Session
    const newSession = {
      sessionName: "Name From Error",
      user_id: 
    }
    

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message });
    } else {
      return res.status(500).send({ message: "Unexpected error" + error });
    }
  }
};
