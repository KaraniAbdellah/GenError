import { Secret } from "jsonwebtoken";

interface Config {
  PORT: number;
  nodeEnv: string;
  secret_key: Secret;
}

const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  secret_key: process.env.SECRET_KEY!,
};

export default config;
