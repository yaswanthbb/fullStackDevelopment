import { useState,useEffect} from "react";
import axios from 'axios'
import './App.css'
import Filter from './Filter'
import PersonForm from "./PersonsForm";
import Persons from "./Persons";

const App =()=>{
  const [persons, setPersons] = useState([])
  const [newName,setNewName] = useState("")
  const[newNumber,setNewNumber] = useState("")
  const[filter,setFilter] = useState("")

  useEffect(()=>{
  axios
  .get("http://localhost:3001/persons")
  .then(response => {
    setPersons(response.data)
  })

},[])


const handlePersonChange = (event) =>{
  setNewName(event.target.value)
}
const handleNumberChange = (event) =>{
  setNewNumber(event.target.value)
}
const handleFilteredChange = (event) =>{
  setFilter(event.target.value)
}
const deletePerson = (id,name) =>{
    if(window.confirm(`Delete "${name}" ?`)){
      axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then(()=>{
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }
const addPerson= (event)=>{
  event.preventDefault();
  const existingPerson = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())
  console.log(existingPerson)
  if (existingPerson) {
    if (window.confirm(`${existingPerson.name} is already added to the phonebook, replace the old number with a new one?`)) {
      const updatedPerson = { ...existingPerson, number: newNumber };
      axios
        .put(`http://localhost:3001/persons/${existingPerson.id}`, updatedPerson)
        .then((response) => {
          setPersons(
            persons.map((person) =>
              person.id === existingPerson.id ? response.data : person
            )
          );
          setNewName("");
          setNewNumber("");
        });
        return;
    }else{
      return;
    }
  }
  const numberObject={
    name: newName,
    number : newNumber
  }
    axios
    .post('http://localhost:3001/persons',numberObject)
    .then(request => {
      setPersons(persons.concat(request.data))
      setNewName('')
      setNewNumber('')
    })
}

const filteredNames = persons.filter((person) =>person.name.toLowerCase().includes(filter.toLowerCase()));
return(
  <div>
    <h2 className="heading">Phonebook</h2>
    
    <Filter value = {filter} onChange = {handleFilteredChange}/>
    
    <h1>Add New</h1>
    
    <PersonForm onSubmit = {addPerson} newName = {newName} newNumber = {newNumber}handlePersonChange = {handlePersonChange} handleNumberChange = {handleNumberChange}/>
    
    <h2 className="heading">Numbers</h2>
    
    <Persons deletePerson =  {deletePerson} filteredNames = {filteredNames}/>
  </div>
)
}
export default App;