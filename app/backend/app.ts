import "dotenv/config";
import express, { Request, Response } from "express";
import config from "./config/config";
import cors from "cors";
import cookieParser from "cookie-parser";

// Import Routes
import user_route from "./routes/user.routes";
import session_route from "./routes/session.routes";
import prompt_route from "./routes/prompt.routes";
import output_route from "./routes/output.routes";

const app = express();
const PORT = config.PORT;
app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/GenError/user", user_route);
app.use("/GenError/session", session_route);
app.use("/GenError/prompt", prompt_route);
app.use("/GenError/output", output_route);

app.listen(PORT, () => {
  console.log(`Server Running in PORT ${PORT}`);
});
