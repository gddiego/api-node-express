
import { Request, Response } from "express";

import { connect } from "../database";
import { Matriculate } from "../interface/matriculate";

export async function getMatriculates(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const Matriculate = await conn.query("SELECT * FROM matriculates");
  return res.json(Matriculate[0]);
}

export async function createMatriculate(req: Request, res: Response) {
  const newMatriculate: Matriculate = req.body;
  const conn = await connect();
  await conn.query("INSERT INTO matriculates SET ?", [newMatriculate]);
  return res.json({
    message: "Matriculate Created",
  });
}

export async function getMatriculate(req: Request, res: Response): Promise<Response> {
  const id = req.params.id;
  const conn = await connect();
  const post = await conn.query("SELECT * FROM matriculates WHERE id = ?", [
    id,
  ]);

  return res.json(post[0]);
}

export async function deleteMatriculate(req: Request, res: Response) {
  const id = req.params.id;
  const conn = await connect();
  await conn.query("DELETE FROM matriculates WHERE id = ?", [id]);
  return res.json({
    message: "Matriculate deleted",
  });
}

export async function updateMatriculate(req: Request, res: Response) {
  const id = req.params.id;
  const updateMatriculate: Matriculate = req.body;
  const conn = await connect();
  await conn.query("UPDATE matriculates SET ? WHERE id = ?", [updateMatriculate, id]);
  return res.json({
    message: "Matriculate updated",
  });
}
