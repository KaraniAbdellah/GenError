import { userType } from "../models/types";
import jwt from "jsonwebtoken";
import config from "../config/config";

const generateToken = (user: userType | null) => {
  if (user) {
    const token: string = jwt.sign({ user: user?.name }, config.secret_key, {
      expiresIn: config.token_time,
    });
    return token;
  } else return null;
};
export default generateToken;
