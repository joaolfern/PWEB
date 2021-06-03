const mysql = require('mysql2')

const dbConnection = () => {
    return connection = mysql.createConnection({
        host: 'localhost',
        password: 'password',
        user: 'root',
        database: 'site_fatec'
    })
}

module.exports = () => {
    return dbConnection
}