import { useState } from "react";
import './App.css'
const Button = ({handleClick,text})=>{
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const App = ()=>{
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);

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
      </div>
      <p className="heading">Statistics</p>
      <p> Good : {good}</p>
      <p> Neutral : {neutral}</p>
      <p> Bad : {bad}</p>
    </div>
  )
}

export default App;