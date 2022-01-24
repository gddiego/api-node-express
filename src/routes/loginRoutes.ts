import { Router } from "express";
const router = Router();

import { loginUser } from "../controllers/loginController";

router.route("/login").get(loginUser);

export default router;
