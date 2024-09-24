const jwt = require("jsonwebtoken");
require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("../../db/db");

router.get("/fetch-user-from-token", async (req, res) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const query = `
      SELECT * FROM users WHERE user_id = ?
    `;
    db.execute(query, [decoded.id], (error, results) => {
      if (error) {
        console.error(`Erreur lors de la récupération de l'utilisateur : ${decoded.id} => `, error);
        res.status(500).json({
          error: "Une erreur est survenue durant la récupération de l'utilisateur",
        });
      } else if (results.length !== 0) {
        const user = results[0];
        res.status(200).json({
          id: user.user_id,
          name: user.username,
          email: user.email,
          role: user.role_id,
        });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    });
  } catch (e) {
    res.status(401).json({ error: "Invalid token" });
  }
});

module.exports = router;