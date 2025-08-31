import express, { Router } from "express";
import { authMiddlware } from "../middlwares/auth.middlware";
import { userMiddlware } from "../middlwares/user.middlware";
// Import User Controller
import { addSession } from "../controllers/session.controller";

const session_route: Router = express.Router();

session_route.post("/addSession", authMiddlware, userMiddlware, addSession);

export default session_route;
