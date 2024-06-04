const multer = require("multer");
const path = require("path");
const express = require("express");
const router = express.Router();
const db = require("../../db/db");

const upload = multer({ dest: "../../front/src/Assets/Images" });

router.post("/insert", upload.single("file"), async (req, res) => {
  const { productName, description, price, origin, typeId } = req.body;
  const imagePath = req.file.filename;

  const query = `
    INSERT INTO products (product_name, description, price, origin, id_type)
    VALUES (?,?,?,?,?)
  `;

  db.execute(
    query,
    [productName, description, price, origin, typeId],
    (error, results) => {
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

module.exports = router;
