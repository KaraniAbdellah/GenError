// server start here
import "dotenv/config";

import express, { Request, Response } from "express";

// Import Routes
import user_route from "./routes/user.routes";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/GenError", user_route);

app.listen(PORT, () => {
  console.log(`Server Running in PORT ${PORT}`);
});

