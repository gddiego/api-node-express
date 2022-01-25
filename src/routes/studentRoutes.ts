import { Router } from "express";
const router = Router();

import {
  getStudents,
  createStudent,
  getStudent,
  deleteStudent,
  updateStudent,
} from "../useCases/createStudent/studentController";

router.route("/").get(getStudents).post(createStudent);

router.route("/:id").get(getStudent).delete(deleteStudent).put(updateStudent);

export default router;
