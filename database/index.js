const mysql = require('mysql2');
require('dotenv').config()

const connect = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    port: 3306
})

connect.getConnection(function (err, connection) {
    if (err) {
        console.log('Error connecting to database')
        return
    }
    console.log('Database connected to successfully')
    connection.release()
})

module.exports = connect.promise()
