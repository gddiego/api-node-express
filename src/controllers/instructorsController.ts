import { Request, Response } from "express";

import { connect } from "../database";
import { Instructor } from "../interface/instructor";

export async function getInstructors(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const Instructor = await conn.query("SELECT * FROM instructors");
  return res.json(Instructor[0]);
}

export async function createInstructor(req: Request, res: Response) {
  const newInstructor: Instructor = req.body;
  const conn = await connect();
  await conn.query("INSERT INTO instructors SET ?", [newInstructor]);
  return res.json({
    message: "Instructor Created",
  });
}

export async function getInstructor(req: Request, res: Response): Promise<Response> {
  const id = req.params.id;
  const conn = await connect();
  const instructor = await conn.query(
    "SELECT * FROM instructors WHERE id = ?",
    [id]
  );

  return res.json(instructor[0]);
}

export async function deleteInstructor(req: Request, res: Response) {
  const id = req.params.id;
  const conn = await connect();
  await conn.query("DELETE FROM instructors WHERE id = ?", [id]);
  return res.json({
    message: "Instructor deleted",
  });
}

export async function updateInstructor(req: Request, res: Response) {
  const id = req.params.id;
  const updateInstructor: Instructor = req.body;
  const conn = await connect();
  await conn.query("UPDATE instructors SET ? WHERE id = ?", [
    updateInstructor,
    id,
  ]);
  return res.json({
    message: "Instructor updated",
  });
}
