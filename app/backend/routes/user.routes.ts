import express, { Router } from "express";

// Import User Controller
import { addUser, getUser } from "../controllers/user.controller";

// Import Middlware
import { userMiddlware } from "../middlwares/user.middlware";
import { authMiddlware } from "../middlwares/auth.middlware";


const user_route: Router = express.Router();

user_route.post("/addUser", addUser);
user_route.get("/getUser",  authMiddlware, userMiddlware, getUser);



export default user_route;
