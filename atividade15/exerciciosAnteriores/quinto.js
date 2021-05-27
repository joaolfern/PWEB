const events = require('events')
const ee = new events.EventEmitter()

ee.on('dados', (fecha) => {
    console.log(fecha)
})

setInterval(() => {
    ee.emit('dados', Date.now())
}, 500)