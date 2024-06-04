const mysql = require("mysql2");

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "cafe_club",
});

module.exports = connect;
