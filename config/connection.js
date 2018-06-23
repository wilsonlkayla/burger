var mysql = require("mysql");


//Create connection for the mySQL object
var connection;

connection= mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.password,
  database: "burgers_db"
});

//Make the connection for Mysql
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export Connection for ORM Use
module.exports = connection;
