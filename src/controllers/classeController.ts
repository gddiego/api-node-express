import { Request, Response } from "express";

import { connect } from "../database";
import { Classe } from "../interface/classes";

export async function getClasses(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const Classe = await conn.query("SELECT * FROM classes");
  return res.json(Classe[0]);
}

export async function createClasse(req: Request, res: Response) {
  const newClasse: Classe = req.body;
  const conn = await connect();
  await conn.query("INSERT INTO classes SET ?", [newClasse]);
  return res.json({
    message: "Classe Created",
  });
}

export async function getClasse(req: Request, res: Response): Promise<Response> {
  const id = req.params.id;
  const conn = await connect();
  const post = await conn.query("SELECT * FROM classes WHERE id = ?", [id]);

  return res.json(post[0]);
}

export async function deleteClasse(req: Request, res: Response) {
  const id = req.params.id;
  const conn = await connect();
  await conn.query("DELETE FROM classes WHERE id = ?", [id]);
  return res.json({
    message: "Course deleted",
  });
}

export async function updateClasse(req: Request, res: Response) {
  const id = req.params.id;
  const updateClasse: Classe = req.body;
  const conn = await connect();
  await conn.query("UPDATE classes SET ? WHERE id = ?", [updateClasse, id]);
  return res.json({
    message: "Classe updated",
  });
}
