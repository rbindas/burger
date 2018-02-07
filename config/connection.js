// Set up MySQL connection.
var mysql = require("mysql");


//connection to MySQL database
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "local!access",
  database: "burgersdb"
});
};

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "local!access",
//   database: "burgersdb"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;