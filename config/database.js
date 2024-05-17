const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  database: "notes_app",
  user: "root",
  password: "huurhun123",
});

module.exports = db;
