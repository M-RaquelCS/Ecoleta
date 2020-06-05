const express = require('express')
const server = express()
//configurar pasta public
server.use(express.static('public'))

//ultilizando template engine
const nunjucks =  require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

//configurar caminhos namimnha aplicação
//pagina inicial
server.get('/', (req, res) => {
    res.render("index.html", {title: 'Seu marketplace de coleta de resíduos'})
})

server.get('/create-point', (req, res) => {
    res.render("create-point.html")
})

server.get('/search', (req, res) => {
    res.render("search-results.html")
})

//ligar o servidor
server.listen(3000)