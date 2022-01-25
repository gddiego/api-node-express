import { Router } from "express";
const router = Router();

import { loginUser } from "../useCases/createUser/loginController";

router.route("/login").get(loginUser);

export default router;
