import { useState } from "react";
import './App.css'
const Button = ({handleClick,text})=>{
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = (props)=>{
  return(
    <div>
    <p className="heading">Statistics</p>
      <p> Good : {props.good}</p>
      <p> Neutral : {props.neutral}</p>
      <p> Bad : {props.bad}</p>
      <p> All : {props.total}</p>
      <p>Average : {props.average}</p>
      <p>Positive : {props.positive} %</p>
    </div>
  )
}
const App = ()=>{
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);
  const total = good+bad+neutral
  const average = (good - bad) / total;
  const positive = good/total * 100;
  const handleGood =()=> setGood(good+1)
  const handleNeutral =()=> setNeutral(neutral+1)
  const handleBad =()=> setBad(bad+1)
  return(
    <div>
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