import { useState } from "react";
import './App.css'
const Button = ({handleClick,text})=>{
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const StatisticLine = (props)=>{
  return(
      <tr>
        <td>{props.text}</td>
        <td>{props.value}{props.text === "Positive" && "%"}</td>
      </tr>
    // <p>{props.text} : {props.value}</p>
  )
}
const Statistics = (props)=>{
  if(props.total === 0 ){
    return(<div>No Feedbacks given</div>)
  }
  return(
    <div>
    <h2 className="heading">Statistics</h2>
    <table>
      <tbody>
      <StatisticLine text = "Good"     value = {props.good}/>
      <StatisticLine text = "Neutral"  value = {props.neutral}/>
      <StatisticLine text = "Bad"      value = {props.bad}/>
      <StatisticLine text = "All"      value = {props.total}/>
      <StatisticLine text = "Average"  value =  {props.average}/>
      <StatisticLine text = "Positive" value = {props.positive}/>
      </tbody>
    </table>
    </div>
  )
}

const App = ()=>{
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected,setSelected] = useState(0)

  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);
  const[points,setPoints] = useState(Array(anecdotes.length).fill(0))
  const total = good+bad+neutral
  const average = (good - bad) / total;
  const positive = good/total * 100;
  const handleGood =()=> setGood(good+1)
  const handleNeutral =()=> setNeutral(neutral+1)
  const handleBad =()=> setBad(bad+1)
  
  const handleAnecdotes =()=>{
    const index = Math.floor(Math.random()*anecdotes.length);
    console.log(index)
    setSelected(index)
  }
  const handleVote = ()=>{
    console.log("index",selected)
    const updatedPoints  = [...points] 
    updatedPoints[selected]+=1;
    setPoints(updatedPoints)
  }
  return(
    <div className="container">
      <div>
        {anecdotes[selected]} has {points[selected]}
      </div>
      <Button handleClick={handleAnecdotes} text = "Next Anecdotes"/>
      <Button handleClick={handleVote} text = "Vote"/>
      <p className="heading">Give Feedback</p>
      <div>
        <Button handleClick={handleGood} text = "Good"/>
        <Button handleClick={handleNeutral} text = "Neutral"/>
        <Button handleClick={handleBad} text = "Bad"/>
        <Statistics good = {good} bad = {bad} neutral = {neutral} total = {total} average = {average} positive = {positive}/>
      </div>
      
    </div>
  )
}

export default App;