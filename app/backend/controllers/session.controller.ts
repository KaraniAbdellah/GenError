import { Request, Response, RequestHandler } from "express";
import { sessionCreateType, sessionType, userType } from "../models/types";
import { PrismaClient } from "@prisma/client";

const sessionClient = new PrismaClient().session;

export const addSession: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    console.log("Hello from AddSession Controller");
    console.log(req.body.session_name);
    if (!req.body.session_name) {
      return res.status(400).send({ message: "all attribute required" });
    }
    console.log("Hello from AddSession");
    const user: userType | undefined = req.user;
    if (!user) {
      return res.status(404).send({ message: "user ot found" });
    }
    // Create a Session
    const newSession: sessionCreateType | null = {
      session_name: req.body.session_name,
      user_id: user.id,
    };

    if (!newSession) {
      return res
        .status(404)
        .send({ message: "session attribute does not exit" });
    }

    // Add Session in Database
    const SessionPush: sessionType | null = await sessionClient.create({
      data: newSession,
      include: {
        Prompts: {
          include: {
            Output: true,
          },
        },
      },
    });
    if (!SessionPush) {
      return res
        .status(404)
        .send({ message: "can not create session object in database" });
    }
    return res.status(200).send(SessionPush);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message });
    } else {
      return res.status(500).send({ message: "Unexpected error" + error });
    }
  }
};
