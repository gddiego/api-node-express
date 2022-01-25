import { Request, Response } from 'express';

import { connect } from '../../database'
import { Course } from '../../interface/Course';

export async function getCourses(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const Course = await conn.query("SELECT * FROM courses");
  return res.json(Course[0]);
}

export async function createCourse(req: Request, res: Response) {
  const newCourse: Course = req.body;
  if (!newCourse.name || !newCourse.requirement || !newCourse.workload || !newCourse.price) {
     return res.json({
       message: "Todos os campos são obrigatórios",
     });
  }
  const conn = await connect();
  await conn.query("INSERT INTO courses SET ?", [newCourse]);
  return res.json({
    message: "Course Created",
  });
}

export async function getCourse(req: Request, res: Response): Promise<Response> {
  const id = req.params.id;
  const conn = await connect();
  const post = await conn.query("SELECT * FROM courses WHERE id = ?", [id]);

  return res.json(post[0]);
}

export async function deleteCourse(req: Request, res: Response) {
  const id = req.params.id;
  const conn = await connect();
  await conn.query("DELETE FROM courses WHERE id = ?", [id]);
  return res.json({
    message: "Course deleted",
  });
}

export async function updateCourse(req: Request, res: Response) {
  const id = req.params.id;
  const updateCourse: Course = req.body;
  const conn = await connect();
  await conn.query("UPDATE courses SET ? WHERE id = ?", [updateCourse, id]);
  return res.json({
    message: "Course updated",
  });
}