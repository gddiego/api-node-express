import { Router } from "express";
const router = Router();

import {
  getMatriculates,
  createMatriculate,
  getMatriculate,
  deleteMatriculate,
  updateMatriculate,
} from "../controllers/matriculateController";

router.route("/").get(getMatriculates).post(createMatriculate);

router
  .route("/:id")
  .get(getMatriculate)
  .delete(deleteMatriculate)
  .put(updateMatriculate);

export default router;
