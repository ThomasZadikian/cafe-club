const express = require("express");
const router = express.Router();
const db = require("../../db/db");

router.get("/products-types", async (req, res) => {
  const query = "SELECT * FROM product_types";

  db.execute(query, (error, result) => {
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

module.exports = router;
