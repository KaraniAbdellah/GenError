import express, { Router } from "express";

// Import User Controller
import { addOutput } from "../controllers/output.controller";

// Import Middlware
import { userMiddlware } from "../middlwares/user.middlware";
import { authMiddlware } from "../middlwares/auth.middlware";


const output_route: Router = express.Router();

output_route.post("/addOutput",  authMiddlware, userMiddlware, addOutput);



export default output_route;
