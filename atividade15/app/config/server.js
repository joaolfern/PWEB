const express = require('express')
const app = express()

app.set('views', 'app/views')
app.set('view engine', 'ejs')

module.exports = app