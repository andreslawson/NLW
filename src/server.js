//Data
const proffys = [
  {
    name: "Diego Fernandes",
    avatar: "https://github.com/diego3g.png",
    whatsapp: "911111111",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.",
    subject: "Quimica",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
  },
  {
    name: "Daniela",
    avatar: "https://github.com/diego3g.png",
    whatsapp: "911111111",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.",
    subject: "Quimica",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
  },
  {
    name: "Capitao",
    avatar: "https://github.com/guilhermecapitao.png",
    whatsapp: "911111111",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.",
    subject: "Quimica",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
  }
]

const subjects = [

  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]

const weekdays = [

  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",

]

//Functionalities

function getSubject(subjectNumber) {
  const position = +subjectNumber - 1
  return subjects[position]

}

function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
  const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
  const data = req.query

  //if have data
  const isNotEmpty = Object.keys(data).length > 0
  if (isNotEmpty) {

    data.subject = getSubject(data.subject)

    //add data to a proffys list
    proffys.push(data)

    return res.redirect("/study")
  }

  //console.log(data)
  //if data is empty show
  return res.render("give-classes.html", { subjects, weekdays })
}

//Server
const express = require('express')
const server = express()

//configure nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

//Start server config
//configure static files (css, scripts, imagens)
server.use(express.static("public"))
  //Application routes
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  //Server port
  .listen(5500)

/*
Routes examples with functions
.get("/give-classes", (req, res) => {
return res.sendFile(__dirname + "/views/give-classes.html")
})
*/


