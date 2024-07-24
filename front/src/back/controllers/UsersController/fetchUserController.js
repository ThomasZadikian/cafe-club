const multer = require("multer");
const express = require("express");
const router = express.Router();
const db = require("../../db/db");

router.post("/fetchUser", async (req, res) => {
  const { username, email, password } = req.body;
  const query = `
    SELECT * FROM users WHERE username = ? AND email = ?
  `;
  db.execute(query, [username, email], (error, results) => {
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
        res.status(201).json(results);
      } else {
        res.status(404).json();
      }
    }
  });
});

module.exports = router;
