const express = require("express");
const app = express();
const morgan = require('morgan');

app.use(express.json());

morgan.token('req-body',(req,res)=>{
  return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :req-body'));

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];




app.get("/", (request, response) => {
  response.send("<h1>Welcome to backend</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(400).end();
  }
});

app.get("/info", (request, response) => {
  const count = persons.length;
  const currentTime = new Date();
  response.send(`<p>Phonebook has info for ${count} people</p>
    <p>${currentTime}</p>
    `);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((p) => p.id !== id);

  response.status(204).end();
});

const generateId = () => {
  const ranId = Math.floor(Math.random()*10000)
  return ranId;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.number || !body.name){
    return response.status(400).json({
      error : "name or number missing"
    })
  }
  
  else if (persons.some(p => p.name === body.name)){
    return response.status(400).json({
      error:"name must be unique"
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };
    persons = persons.concat(person);
    response.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log("server is running on the port", PORT);
});
