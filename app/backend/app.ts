// server start here
import "dotenv/config";

import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server Running in PORT ${PORT}`);
});

