import { userType } from "./models/types";
import { JwtPayload } from "jsonwebtoken";
import { Response } from "express";

// add user attribute to exsting type Express exactly Request
declare global {
  namespace Express {
    export interface Request {
      user?: userType;
    }
    export interface Response {
      user?: userType
    }
  }
}
