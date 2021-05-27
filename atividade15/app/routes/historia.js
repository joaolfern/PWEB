module.exports = (app) => {
    app.get('/historia', (req, res) => {
        res.render('informacao/historia')
    })
}