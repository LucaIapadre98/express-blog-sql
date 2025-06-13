const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Casamaina1",
    database:"blog",
    port:"3306"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("database connected");
});

module.exports = connection;