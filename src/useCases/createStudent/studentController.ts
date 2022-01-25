import { Request, Response } from "express";

import { connect } from "../../database";
import { Student } from "../../interface/Student";

export async function getStudents(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const Student = await conn.query("SELECT * FROM students");
  return res.json(Student[0]);
}

export async function createStudent(req: Request, res: Response) {
  const newStudent: Student = req.body;
   if (
     !newStudent.document ||
     !newStudent.birth_date || newStudent.name ||newStudent.email || newStudent.phone || newStudent.workload 
   ) {
     return res.json({
       message: "Todos os campos são obrigatórios",
     });
   }
  const conn = await connect();
  await conn.query("INSERT INTO students SET ?", [newStudent]);
  return res.json({
    message: "Student Created",
  });
}

export async function getStudent(req: Request, res: Response): Promise<Response> {
  const id = req.params.id;
  const conn = await connect();
  const post = await conn.query("SELECT * FROM students WHERE id = ?", [id]);

  return res.json(post[0]);
}

export async function deleteStudent(req: Request, res: Response) {
  const id = req.params.id;
  const conn = await connect();
  await conn.query("DELETE FROM students WHERE id = ?", [id]);
  return res.json({
    message: "Student deleted",
  });
}

export async function updateStudent(req: Request, res: Response) {
  const id = req.params.id;
  const updateStudent: Student = req.body;
  const conn = await connect();
  await conn.query("UPDATE students SET ? WHERE id = ?", [updateStudent, id]);
  return res.json({
    message: "Student updated",
  });
}
