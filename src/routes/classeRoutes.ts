import { Router } from "express";
const router = Router();

import {
  getClasses,
  createClasse,
  getClasse,
  deleteClasse,
  updateClasse,
} from "../useCases/createClasse/classeController";

router.route("/").get(getClasses).post(createClasse);

router.route("/:id").get(getClasse).delete(deleteClasse).put(updateClasse);

export default router;
