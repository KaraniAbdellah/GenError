// create user route

import express, { Router } from "express";

// Import User Controller
import { addUser } from "../controllers/user.controller";

const user_route: Router = express.Router();


user_route.post("/addUser", addUser);


export default user_route;