import { userType } from "./models/types";

declare namespace Express {
  interface Request {
    user?: userType;
  }
}
