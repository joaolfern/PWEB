const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    password: 'password',
    user: 'root',
    database: 'site_fatec'
})

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected!')
})

//res.render('informacao/professores');

module.exports = (app) => {
    app.get('/professores', (req, res) => {

        connection.query('select * from professores', function (err, results) {
            if (err) {
                console.log(err);
                res.send(err);
                return;
            }
            res.send(results);
        });
    })
}