import multer from "multer";
import express, { Request, Response } from "express";
import db from "../../db/db";
import { User } from "../../Interface/User";

const router = express.Router();
const upload = multer({ dest: "../../front/src/Assets/Images" });

router.get("/fetch-users", async (req: Request, res: Response) => {
  const query = `
    SELECT * FROM users 
  `;
  db.execute(query, (error: Error, results: User[]) => {
    if (error) {
      res.status(500).json({
        error:
          "Une erreur est survenue durant la récupération des utilisateurs",
      });
    } else {
      res.status(201);
      if (results.length !== 0) {
        res.status(200).json(results);
      } else {
        res.status(200).json();
      }
    }
  });
});

export default router;
