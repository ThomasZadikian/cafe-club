const express = require("express");
const router = express.Router();
const db = require("../db/db");

router.get("/productsDisplay", async (req, res) => {
  const query = "SELECT * FROM products";

  db.execute(query, (error, result) => {
    if (error) {
      console.error(
        "Erreur lors de la récupération des produits en base de données",
        error
      );
      res.status(500).json({
        error:
          "Une erreur est survenur lors de la récupération des produits en base de données",
      });
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
