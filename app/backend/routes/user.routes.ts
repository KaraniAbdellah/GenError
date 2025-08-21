import express, { Router } from "express";

// Import User Controller
import { addUser } from "../controllers/user.controller";


// Import Middlware
import { authMiddlware } from "../middlwares/auth.middlware";

const user_route: Router = express.Router();


user_route.post("/addUser", authMiddlware, addUser);



export default user_route;