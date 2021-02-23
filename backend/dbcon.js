var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_raylst',
  password        : '4078',
  database        : 'cs340_raylst'
});
module.exports.pool = pool;
