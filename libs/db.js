var mysql = require('mysql'); // https://github.com/felixge/node-mysql

var db  = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASSWORD,
  database        : process.env.DB_INSTANCE,
  port            : process.env.DB_PORT || 3306
});

module.exports = db;
