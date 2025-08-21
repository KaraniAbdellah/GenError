import { userType } from "./models/types";

// add user attribute to exsting type Express exactly Request
declare global {
  namespace Express {
    interface Request {
      user?: userType;
    }
  }
}
