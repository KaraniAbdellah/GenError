import { Request, Response, RequestHandler } from "express";
import { userType } from "../models/types";

export const addSession: RequestHandler = (req: Request, res: Response) => {
  try {
    // Get User
    const user: userType | undefined = req.user;

    // we should be add session --> but session contain prompts and also output

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message });
    } else {
      return res.status(500).send({ message: "Unexpected error" + error });
    }
  }
};
