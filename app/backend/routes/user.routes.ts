// create user route

import express, { Router } from "express";

// Import User Controller
import { get_user } from "../controllers/user.controller";

const user_route: Router = express.Router();


user_route.get("/get_user", get_user);


export default user_route;