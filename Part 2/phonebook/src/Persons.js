const Persons = ({filteredNames,deletePerson})=>{
    return(
        <div>
      {filteredNames.map((person)=>
      <li className="list" key={person.id}>{person.name} {person.number}
      <button onClick ={()=>deletePerson(person.id,person.name)}>delete</button>
      </li>)}
    </div>
    )
}
export default Persons;