const express = require('express')
const app = express()
const persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const count = persons.length
const currentTime = new Date()
app.get('/api/persons',(request,response)=>{
    response.json(persons)
})
app.get('/info',(request,response)=>{
    response.send(`<p>Phonebook has info for ${count} people</p>
    <p>${currentTime}</p>
    `)
})
const PORT = 3001
app.listen(PORT,()=>{
    console.log("server is running on the port",PORT)
})