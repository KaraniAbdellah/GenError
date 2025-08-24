import { userType } from "../models/types";
import jwt from "jsonwebtoken";
import config from "../config/config";

const generateToken = (user: userType) => {
  const token: string = jwt.sign(user?.name, config.secret_key, {
    expiresIn: "100000s",
  });
};
export default generateToken;
