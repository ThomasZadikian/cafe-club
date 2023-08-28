const express = require("express");
const router = express.Router();
const db = require("../db/db");

router.get("/productsType", async (req, res) => {
  const query = "SELECT * FROM types";

  db.execute(query, (error, result) => {
    if (error) {
      console.error(
        "Erreur lors de la récupération des types de produits :",
        error
      );
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération des types de produits",
      });
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
