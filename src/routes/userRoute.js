import { Router } from "express";
import createUser from "../controllers/userController";
const authRouter = Router();

authRouter.post("/register", createUser);

export default authRouter;
