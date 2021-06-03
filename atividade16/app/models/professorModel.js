module.exports = function () {

    this.getProfessores = function (connection, callback) {
        connection.query('select * from professores', callback);
    }

    this.getProfessor = function (connection, callback) {
        connection.query('select * from professores WHERE id_professor=1', callback);
    }


    // o MySQL suporta uma forma diferente para incluir os dados sem precisar definir as colunas
    // ele vai substituir o JSON onde ele encontrar o ?
    this.salvarProfessor = function (professor, connection, callback) {
        connection.query('insert into professores SET ?', professor, callback);
    }

    return this;

}