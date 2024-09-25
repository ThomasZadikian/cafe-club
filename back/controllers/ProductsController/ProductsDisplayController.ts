import express, { Request, Response } from "express";
import db from "../../db/db";
import { QueryError, RowDataPacket } from "mysql2";

const router = express.Router();

router.get("/products-display", async (req: Request, res: Response) => {
  const query = "SELECT * FROM products";

  db.execute(query, (error: QueryError, result: RowDataPacket) => {
    if (error) {
      res.status(500).json({
        error:
          "Une erreur est survenur lors de la récupération des produits en base de données",
      });
    } else {
      res.json(result);
    }
  });
});

export default router;
