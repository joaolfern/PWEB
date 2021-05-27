

const texto = require('./modulo1')
const app = require('./app/config/server')

//routes
require('./app/routes/adicionar_usuario')(app)
require('./app/routes/cursos')(app)
require('./app/routes/historia')(app)
require('./app/routes/home')(app)
require('./app/routes/professores')(app)

//server
app.listen(5000, () => {
    console.log(texto)
})