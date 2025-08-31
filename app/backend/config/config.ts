import { Secret } from "jsonwebtoken";

interface Config {
  PORT: number;
  nodeEnv: string;
  secret_key: Secret;
  token_time: number
}

const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  secret_key: process.env.SECRET_KEY!,
  token_time: 3600000
};

export default config;
