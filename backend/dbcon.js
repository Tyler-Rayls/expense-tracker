var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_yensh',
  password        : '4035',
  database        : 'cs340_yensh'
});
module.exports.pool = pool;