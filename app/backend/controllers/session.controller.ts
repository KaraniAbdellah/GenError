import { Request, Response, RequestHandler } from "express";
import { sessionCreateType, sessionType, userType } from "../models/types";
import { PrismaClient } from "@prisma/client";

const sessionClient = new PrismaClient().session;

export const addSession: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const user: userType | undefined = req.user;
    console.log(user);
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
    return res.status(200).send(newSession);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message });
    } else {
      return res.status(500).send({ message: "Unexpected error" + error });
    }
  }
};

export const getSession: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const user: userType | undefined = req.user;
    if (!user) {
      return res.status(404).send({ message: "user ot found" });
    }

    const userSession: sessionType | null = await sessionClient.findUnique({
      where: {
        user_id: user.id,
      },
      include: {
        Prompts: {
          include: {
            Output: true,
          },
        },
      },
    });

    if (!userSession) {
      return res.status(404).send({ message: "Session not found" });
    }

    return res.status(200).send(userSession);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message });
    } else {
      return res.status(500).send({ message: "Unexpected error" + error });
    }
  }
};
