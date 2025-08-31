import express, { Router } from "express";
import { authMiddlware } from "../middlwares/auth.middlware";
import { userMiddlware } from "../middlwares/user.middlware";
// Import User Controller
import { addSession,getSession } from "../controllers/session.controller";

const session_route: Router = express.Router();

session_route.post("/addSession", authMiddlware, userMiddlware, addSession);
session_route.post("/getSession", authMiddlware, userMiddlware, getSession);

export default session_route;
