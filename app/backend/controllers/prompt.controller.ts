import { Request, Response, RequestHandler } from "express";
import { promptType, userType, promptCreateType } from "../models/types";
import { PrismaClient } from "@prisma/client";

const promptClient = new PrismaClient().prompt;

export const addPrompt: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const user: userType | undefined = req.user;
    console.log(user);
    if (!user) {
      return res.status(404).send({ message: "user ot found" });
    }
    // Create a Prompt
    const newPrompt: promptCreateType | null = {
      prompt_text: req.body.prompt_text,
      session_id: req.body.session_id,
    };

    if (!newPrompt) {
      return res
        .status(404)
        .send({ message: "Prompt attribute does not exit" });
    }

    // Add Prompt in Database
    const PromptPush: promptType | null = await promptClient.create({
      data: newPrompt,
      include: {
        Output: true,
      },
    });
    if (!PromptPush) {
      return res
        .status(404)
        .send({ message: "can not create Prompt object in database" });
    }
    return res.status(200).send(PromptPush);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message });
    } else {
      return res.status(500).send({ message: "Unexpected error" + error });
    }
  }
};
