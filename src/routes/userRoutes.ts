import { Router } from "express";
const router = Router();

import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/userController";

router.route("/").get(getUsers).post(createUser);
router
  .route("/:id")
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);

export default router;
