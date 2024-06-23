const mysql = require('mysql2/promise');
// Create the connection to database
const connection = mysql.createPool({
    host: process.env.HOSTDB || 'localhost',
    user: process.env.USERDB || 'root',
    database: process.env.DB || 'login2',
    password: process.env.PASWORDDB || '',
    port: process.env.PORTDB || 3306,
});

module.exports = connection;