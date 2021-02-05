const mysql = require('mysql');

// connect to mysql

const dbConn = mysql.createConnection({
    host: 'Localhost',
    user: 'root',
    password: '',
    database: 'node_mysql_db'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log("Database is connected Successfully")
})

module.exports = dbConn;