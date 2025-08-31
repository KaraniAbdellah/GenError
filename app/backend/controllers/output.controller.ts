import { Request, Response, RequestHandler } from "express";
import { userType, outputCreateType, outputType } from "../models/types";
import { PrismaClient } from "@prisma/client";

const outputClient = new PrismaClient().output;

export const addOutput: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {

    if (!req.body.messages || !req.body.prompt_id) {
      return res.status(400).send({message: "all attribute required"});
    }

    const user: userType | undefined = req.user;
    if (!user) {
      return res.status(404).send({ message: "user ot found" });
    }
    // Create a output
    const newOutput: outputCreateType | null = {
        messages: req.body.messages,
        prompt_id: req.body.prompt_id,
    };

    if (!newOutput) {
      return res
        .status(404)
        .send({ message: "output attribute does not exit" });
    }

    // Add output in Database
    const OutputPush: outputType | null = await outputClient.create({
      data: newOutput,
    });
    if (!OutputPush) {
      return res
        .status(404)
        .send({ message: "can not create output object in database" });
    }
    return res.status(200).send(OutputPush);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message });
    } else {
      return res.status(500).send({ message: "Unexpected error" + error });
    }
  }
};
