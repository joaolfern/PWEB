module.exports = (app) => {
    app.get('/adicionar-usuario', (req, res) => {
        res.render('admin/adicionar_usuarios')
    })
}