import jwt from "jsonwebtoken";
import express, { Request, Response } from "express";
import { FieldPacket, QueryError, RowDataPacket } from "mysql2";

import db from "../../db/db";
import { User } from "../../Interface/User";

require("dotenv").config();
const router = express.Router();

router.post("/fetch-user-connect", async (req: Request, res: Response) => {
  const { password, email } = req.body;
  const query = `
    SELECT * FROM users WHERE email = ? AND password = ?
  `;
  try {
    db.execute(
      query,
      [email, password],
      (
        error: QueryError | null,
        results: RowDataPacket[],
        _fields: FieldPacket[]
      ) => {
        if (error) {
          console.error(
            `Erreur lors de la récupération de l'utilisateur : ${email} => `,
            error
          );
          res.status(500).json({
            error:
              "Une erreur est survenue durant la récupération de l'utilisateur",
          });
        } else {
          if (results.length !== 0) {
            const user = results[0] as User;
            const token = jwt.sign(
              {
                id: user.user_id,
                name: user.username,
                email: user.email,
                role: user.role_id,
              },
              process.env.JWT_SECRET as jwt.Secret ?? ''
            );
            const result = {
              token: token,
              user: {
                id: user.user_id,
                name: user.username,
                email: user.email,
                role: user.role_id,
              },
            };
            res.status(200).json({ result });
          } else {
            res.status(404).json("Erreur création token");
          }
        }
      }
    );
  } catch (e) {
    throw new Error(
      "La connection a la base de donnée à échouée. Merci de contacter l'administrateur du site"
    );
  }
});

export default router;
