const PersonForm = (props)=>{
    return(
    <form onSubmit={props.onSubmit}>
        <div>
            name : <input placeholder = "Arto Hellas"value  ={props.newName} onChange = {props.handlePersonChange}/>
        </div>
        <div>
            number : <input placeholder = "040-123456"value={props.newNumber} onChange = {props.handleNumberChange}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
    )
}

export default PersonForm;