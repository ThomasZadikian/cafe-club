import express, { Request, Response } from "express";
import db from "../../db/db";
import { QueryError, QueryResult, FieldPacket } from "mysql2";

const router = express.Router();

router.post("/insert", async (req: Request, res: Response) => {
  const { productName, description, price, origin, typeId } = req.body;

  const query = `
    INSERT INTO products (product_name, description, price, origin, id_type)
    VALUES (?,?,?,?,?)
  `;

  db.execute(
    query,
    [productName, description, price, origin, typeId],
    (error: QueryError | null, results: QueryResult) => {
      if (error) {
        console.error("Erreur lors de l'insertion du produit", error);
        res.status(500).json({
          error: "Une erreur est survenue durant l'intégration du produit",
        });
      } else {
        res.status(201).json({ message: "Produit inséré correctement" });
      }
    }
  );
});

export default router;
