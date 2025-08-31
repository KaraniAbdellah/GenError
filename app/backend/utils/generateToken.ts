import { userType } from "../models/types";
import jwt from "jsonwebtoken";
import config from "../config/config";

const generateToken = (user: userType | null) => {
  if (user) {
    const userToSend = {
      name: user?.name,
      email: user?.email
    }
    const token: string = jwt.sign(userToSend, config.secret_key, {
      expiresIn: config.token_time,
    });
    return token;
  } else return null;
};
export default generateToken;
