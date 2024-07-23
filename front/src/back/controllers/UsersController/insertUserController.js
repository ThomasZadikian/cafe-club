const express = require("express");
const router = express.Router();
const db = require("../../db/db");

router.post("/insert", async (req, res) => {
  const { username, email, password } = req.body;
  const query = `
    INSERT INTO users (username, email, password, role_id) 
    VALUES (?,?,?,1)
  `;
  console.log("Je fonctionne");
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

module.exports = router;
