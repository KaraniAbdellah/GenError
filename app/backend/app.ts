import "dotenv/config";
import express, { Request, Response } from "express";
import config from "./config/config";

// Import Routes
import user_route from "./routes/user.routes";

const app = express();
const PORT = config.PORT;
app.use(express.json());

app.use("/GenError", user_route);

app.listen(PORT, () => {
  console.log(`Server Running in PORT ${PORT}`);
});

