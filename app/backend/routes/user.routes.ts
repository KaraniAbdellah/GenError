import express, { Router } from "express";

// Import User Controller
import { addUser, getUser, logOut } from "../controllers/user.controller";

// Import Middlware
import { userMiddlware } from "../middlwares/user.middlware";
import { authMiddlware } from "../middlwares/auth.middlware";


const user_route: Router = express.Router();

user_route.post("/addUser", addUser);
user_route.get("/getUser",  authMiddlware, userMiddlware, getUser);
user_route.delete("/logout",  authMiddlware, userMiddlware, logOut);



export default user_route;
