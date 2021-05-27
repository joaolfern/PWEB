const http = require('http')

const server = http.createServer((req, res) => {
    res.end('<html><body><h1>Site da fatec sorocabax</h1></body></html>')
})

server.listen(5000)