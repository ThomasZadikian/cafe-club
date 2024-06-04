const multer = require("multer");
const path = require("path");
const express = require("express");
const router = express.Router();
const db = require("../../db/db");

const upload = multer({ dest: "../../front/src/Assets/Images" });

router.post("/insert", upload.single("file"), async (req, res) => {
  const { username, email, password } = req.body;

  const query = `
    INSERT INTO users (username, email, password, role_id)
    VALUES (?,?,?,1)
  `;

  db.execute(query, [username, email, password], (error, results) => {
    if (error) {
      console.error(
        `Erreur lors de la création de l'utilisateur ${username} => `,
        error
      );
      res.status(500).json({
        error: "Une erreur est survenue durant 'ajout de l'utilisateur'",
      });
    } else {
      res
        .status(201)
        .json({ message: `Utilisateur ${username} à été ajouté correctement` });
    }
  });
});

module.exports = router;
