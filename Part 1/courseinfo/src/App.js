const Header = (props) =>{
  return(
    <p>{props.course}</p>
  )
}
const Part = (props)=>{
  return(
    <p>{props.part} : {props.exercisesno}</p>
  )
}
const Content = (props)=>{
  return(
    // Before Refactoring the Code
    // <p>{props.part} : {props.exercise}</p>
    <div>
      <Part part = "Fundamentals of React" exercisesno = "10"/>
      <Part part = "Using props to pass data" exercisesno = "7"/>
      <Part part = "State of Component" exercisesno = "14"/>
    </div>
  )
}
const Total = (props) =>{
  return(
    <p>Number of exercises : {props.total}</p>
  )
}
const App = () =>{
  return(
    <div>
      <Header course = {"Half Stack Development"}/>
      {/* Before Refactoring The Code */}
      {/* {<Content part = {"Fundamentals of React"} exercise = {10}/>
      <Content part = {"Using props to pass data"} exercise = {7}/>
      <Content part = {"State of a component"} exercise = {14}/>} */}
      <Content/>
      <Total total = {10+14+7}/>
    </div>
  )
}
export default App;