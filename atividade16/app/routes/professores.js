module.exports = function (app) {

    app.get('/informacao/professores', function (req, res) {

        var connection = app.config.dbConnection();
        var professoresModel = app.models.professorModel;// variável que recupera a função exporta

        //executar a função 
        // tem passar a conexao e o callback 
        professoresModel.getProfessores(connection, function (error, results) {
            res.render('informacao/professores', { profs: results });
        });

    });
}