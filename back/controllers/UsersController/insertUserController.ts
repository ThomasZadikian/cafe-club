import express, { Request, Response } from "express";
import db from "../../db/db";

const router = express.Router();

router.post("/insert", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const query = `
    INSERT INTO users (username, email, password, role_id) 
    VALUES (?,?,?,1)
  `;
  db.execute(query, [username, email, password], (error, results) => {
    if (error) {
      console.error(
        `Erreur lors de la création de l'utilisateur ${username} => `,
        error
      );
      res.status(500).json({
        error: "Une erreur est survenue durant l'ajout de l'utilisateur",
      });
    } else {
      res
        .status(201)
        .json({ message: `Utilisateur ${username} à été ajouté correctement` });
    }
  });
});

export default router;
