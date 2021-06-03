module.exports = (app) => {
    app.get('/informacao/professores/detalhaProfessores', (req, res) => {
        const connection = app.config.dbConnection()
        var professoresModel = app.models.professorModel;
        professoresModel.getProfessor(connection, function (error, results) {
            res.render('informacao/professores/detalhaProfessores', { profs: results });
        });
    })
}