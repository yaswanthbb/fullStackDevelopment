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
    console.log("effect")
  axios
  .get("http://localhost:3001/persons")
  .then(response => {
    console.log("promise fulfilled")
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
const addPerson= (event)=>{
  event.preventDefault();
  if (persons.find(person => person.name === newName)) {
    alert(`${newName} is already added to the phonebook`)
    return;
  }
  const numberObject={
    name: newName,
    id :persons.length+1,
    number : newNumber
  }
  setPersons(persons.concat(numberObject));
  setNewName('')
  setNewNumber('')
}

const filteredNames = persons.filter((person) =>person.name.toLowerCase().includes(filter.toLowerCase()));
return(
  <div>
    <h2 className="heading">Phonebook</h2>
    
    <Filter value = {filter} onChange = {handleFilteredChange}/>
    
    <h1>Add New</h1>
    
    <PersonForm onSubmit = {addPerson} newName = {newName} newNumber = {newNumber}handlePersonChange = {handlePersonChange} handleNumberChange = {handleNumberChange}/>
    
    <h2 className="heading">Numbers</h2>
    
    <Persons filteredNames = {filteredNames}/>
  </div>
)
}
export default App;