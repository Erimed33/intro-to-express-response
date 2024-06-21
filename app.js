const express = require('express')

const app = express()
const port = 3434;


const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - Definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes, and signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"

]


app.get("/terminator", (request, response) => {
    response.send("I'll be back");
    
  });

  app.get("/Homer-Simpson", (request, response) => {
    response.send("D'oh")
  })

  app.get("/Batman", (request, response) => {
    response.send(" To the Batmobile!")
  })

  app.get("/Borg", (request, response) => {
    response.send("Resistance is futile")
  })

  app.get("/Fox-Mulder", (request, response) => {
    response.send("The truth is out there")
  })
   

app.get('/magic8', (request, response) => {
  const randomIndex = Math.floor(Math.random() * magic8Responses.length)
  const magic8Answer = magic8Responses[randomIndex]
  response.send(`<h1>${magic8Answer}</h1>`)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


