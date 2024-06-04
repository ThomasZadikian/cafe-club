const multer = require("multer");
const path = require("path");
const express = require("express");
const router = express.Router();
const db = require("../../db/db");

const upload = multer({ dest: "../../front/src/Assets/Images" });

router.post("/fetch", upload.single("file"), async (req, res) => {
  const { username, email } = req.body;

  const query = `
    SELECT * FROM users WHERE email = ? AND username = ?
  `;

  db.execute(query, [email, username], (error, results) => {
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
      res.status(201);
      if (res.length != 0) {
        res.json(result);
      } else {
        res.json({ message: `Utilisateur ${username} n'as pas été trouvé` });
      }
    }
  });
});

module.exports = router;
