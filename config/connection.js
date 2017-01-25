//requiring mysql to access the database 
var mysql = require("mysql");
//creating the connection to connect to the database 
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "chad444", /// 
  database: "burgers_db"
});

//function for connecting 
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});
//exporting the connection 
module.exports = connection; 
