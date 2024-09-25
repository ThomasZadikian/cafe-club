import express, { Request, Response } from "express";
import db from "../../db/db";
import { QueryError, RowDataPacket } from "mysql2";

const router = express.Router();

router.get("/products-types", async (req: Request, res: Response) => {
  const query = "SELECT * FROM product_types";

  db.execute(query, (error: QueryError, result: RowDataPacket) => {
    if (error) {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération des types de produits",
      });
    } else {
      res.json(result);
    }
  });
});

export default router;
