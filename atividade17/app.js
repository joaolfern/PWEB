const app = require('./app/config/server')
const express = require('express')

app.use(express.static(__dirname + '/app/public'));


//server
app.listen(3000, () => {
    console.log('Connected')
})