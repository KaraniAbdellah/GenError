import "dotenv/config";
import express, { Request, Response } from "express";
import config from "./config/config";
import cors from "cors";

// Import Routes
import user_route from "./routes/user.routes";
import session_route from "./routes/session.routes";

const app = express();
const PORT = config.PORT;
app.use(express.json());
app.use(cors({
  origin: "*"
}));


app.use("/GenError/user", user_route);
app.use("/GenError/session", session_route);

app.listen(PORT, () => {
  console.log(`Server Running in PORT ${PORT}`);
});

