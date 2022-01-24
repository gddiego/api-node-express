
import { Request, Response } from "express";

import { connect } from "../database";
import { User } from "../interface/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function loginUser(req: Request, res: Response) {
  const conn = await connect();
   
   conn.query(
     "SELECT * FROM users WHERE email = ?", [req.body.email],
      
  );
  
    
  
}