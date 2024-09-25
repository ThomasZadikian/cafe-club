import jwt from "jsonwebtoken";
import express, { Request, Response } from "express";
import db from "../../db/db";
import { FieldPacket, QueryError, RowDataPacket } from "mysql2";
import { User } from "../../Interface/User";

const router = express.Router();

router.post("/fetch-user", async (req: Request, res: Response) => {
  const { username, email } = req.body;
  const query = `
    SELECT * FROM users WHERE username = ? AND email = ?
  `;
  db.execute(
    query,
    [username, email],
    (
      error: QueryError | null,
      results: RowDataPacket[],
      fields: FieldPacket[]
    ) => {
      if (error) {
        console.error(
          `Erreur lors de la récupération de l'utilisateur : ${username} => `,
          error
        );
        res.status(500).json({
          error:
            "Une erreur est survenue durant la récupération de l'utilisateur",
        });
      } else {
        if (results.length !== 0) {
          const user = results[0] as User;
          const token = jwt.sign({ id: user.user_id }, "X1okS866Xpp845");
          res.status(200).json({ user, token });
        } else {
          res.status(404).json();
        }
      }
    }
  );
});

export default router;
