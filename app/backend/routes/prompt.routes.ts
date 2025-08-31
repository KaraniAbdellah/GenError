import express, { Router } from "express";

// Import User Controller
import { addPrompt } from "../controllers/prompt.controller";

// Import Middlware
import { userMiddlware } from "../middlwares/user.middlware";
import { authMiddlware } from "../middlwares/auth.middlware";


const prompt_route: Router = express.Router();

prompt_route.get("/addPrompt",  authMiddlware, userMiddlware, addPrompt);



export default prompt_route;
