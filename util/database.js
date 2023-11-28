const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "local",
  user: "admin",
  database: "node-complete",
  password: "Password@123",
});

module.exports = pool.promise();
