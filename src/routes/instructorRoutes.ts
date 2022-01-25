import { Router } from "express";
const router = Router();

import {
  getInstructors,
  createInstructor,
  getInstructor,
  deleteInstructor,
  updateInstructor,
} from "../useCases/createInstructor/instructorsController";

router.route("/").get(getInstructors).post(createInstructor);

router
  .route("/:id")
  .get(getInstructor)
  .delete(deleteInstructor)
  .put(updateInstructor);

export default router;
