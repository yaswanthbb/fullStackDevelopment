const Persons = (props)=>{
    return(
        <div>
      {props.filteredNames.map((person)=><li className="list" key={person.id}>{person.name} {person.number}</li>)}
    </div>
    )
}
export default Persons;