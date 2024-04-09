import { Router } from "express";
import { createUser, login } from "../controllers/userController";

const authRouter = Router();

authRouter.post("/register", createUser);
authRouter.post("/login", login);

export default authRouter;
