var mysql = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'passe1999',
  database : 'tripini'
});

module.exports = connection;