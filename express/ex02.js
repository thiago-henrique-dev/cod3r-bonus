const express = require('express')
const server = express()

server.use('/api', function (req, res, next) {
    console.log('Inicio')
    next()
    console.log('fim')
})

server.use('/api', function (req, res) {
    console.log('Resposta...')
    res.send('<h1>Olá Express</h1>')
})

server.listen(3000, () => console.log('Executando...'))
