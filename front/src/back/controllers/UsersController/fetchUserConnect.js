const jwt = require("jsonwebtoken");
require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("../../db/db");

router.post("/fetchUserConnect", async (req, res) => {
  const { password, email } = req.body;
  const query = `
    SELECT * FROM users WHERE email = ? AND password = ?
  `;
  db.execute(query, [email, password], (error, results) => {
    if (error) {
      console.error(
        `Erreur lors de la récupération de l'utilisateur : ${email} => `,
        error
      );
      res.status(500).json({
        error:
          "Une erreur est survenue durant la récupération de l'utilisateur",
      });
    } else {
      if (results.length !== 0) {
        const user = results[0];
        const token = jwt.sign(
          {
            id: user.user_id,
            name: user.username,
            email: user.email,
            role: user.role_id,
          },
          process.env.JWT_SECRET
        );
        res.status(200).json({ token });
      } else {
        res.status(404).json();
      }
    }
  });
});

module.exports = router;
