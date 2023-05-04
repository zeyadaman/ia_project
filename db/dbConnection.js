const { error } = require("console");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ia",
    port: "3307"
});
connection.connect((err) => {
    if (err) throw err;
    console.log("DB connected");
});
module.exports = connection;