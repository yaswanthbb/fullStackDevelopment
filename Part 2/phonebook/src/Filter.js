const Filter = ({value,onChange})=>{
  return(
    <form onSubmit={event => event.preventDefault()}>
      filter shown with 
    <input value={value} onChange={onChange}/>
    </form>
  )
}
export default Filter;