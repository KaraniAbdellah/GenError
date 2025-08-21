import express, { Router } from "express";
import { authMiddlware } from "../middlwares/auth.middlware";
// Import User Controller
import { addSession } from "../controllers/session.controller";

const user_route: Router = express.Router();

user_route.post("/addSession", authMiddlware, addSession);

export default user_route;
