import { userType } from "./models/types";
import { JwtPayload } from "jsonwebtoken";

// add user attribute to exsting type Express exactly Request
declare global {
  namespace Express {
    interface Request {
      user?: userType;
    }
  }
}
