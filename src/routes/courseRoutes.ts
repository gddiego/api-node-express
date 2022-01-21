import { Router } from 'express';
const router = Router();

import {
  getCourses,
  createCourse,
  getCourse,
  deleteCourse,
  updateCourse,
} from "../controllers/courseController";

router.route("/").get(getCourses).post(createCourse);

router.route("/:id").get(getCourse).delete(deleteCourse).put(updateCourse);

export default router;  