const multer = require("multer");
const express = require("express");
const router = express.Router();
const db = require("../../db/db");

const upload = multer({ dest: "../../front/src/Assets/Images" });

router.get("/fetchUsers", upload.single("file"), async (req, res) => {
  const query = `
    SELECT * FROM users 
  `;
  db.execute(query, (error, results) => {
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
      if (res.length !== 0) {
        res.json(results);
      } else {
        res.json({ message: `Aucun utilisateur n'a été trouvé` });
      }
    }
  });
});

module.exports = router;
