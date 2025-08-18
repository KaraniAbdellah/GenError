// create user controller

import { Request, Response } from "express";

export const get_user = (req: Request, res: Response) => {
  return res.status(200).send({ message: "Hello User" });
};
