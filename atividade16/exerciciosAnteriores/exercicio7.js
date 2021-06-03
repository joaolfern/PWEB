const http = require('http')

function htmlPage(string) {
    return `<html><body>${string} da fatec</body></html>`
}

const server = http.createServer((req, res) => {
    const opcao = req.url

    res.end(htmlPage(opcao.replace('/', '')))
})

server.listen(5000)