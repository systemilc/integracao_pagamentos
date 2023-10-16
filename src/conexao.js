const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Thmpv77d6f",
  database: "gatwaypagamento",
});

module.exports = pool;
