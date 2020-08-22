//Server
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configure nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

//Start server config

server
  //Recive data of req.body
  .use(express.urlencoded({ extended: true }))
  //Configure static files (css, scripts, imagens)
  .use(express.static("public"))
  //Application routes
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  //Server port
  .listen(5500)

/*
Routes examples with functions
.get("/give-classes", (req, res) => {
return res.sendFile(__dirname + "/views/give-classes.html")
})
*/


