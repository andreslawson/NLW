const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
  //Insert data

  proffyValue = {
    name: "Diego Fernandes",
    avatar: "https://github.com/diego3g.png",
    whatsapp: "900000000",
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.",

  }

  classValue = {
    subject: "Química",
    cost: "20",
    //proffy id is auto
  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]


  // await createProffy(db, { proffyValue, classValue, classScheduleValues })

  //Consult data

  //Check all proffys
  const selectedProffys = await db.all("SELECT * FROM proffys")
  console.log(selectedProffys)

  //select one proffy and also show data

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1
  `)
  console.log(selectClassesAndProffys)



})



