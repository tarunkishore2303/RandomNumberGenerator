import React, { useState } from 'react'
import './App.css'
import Sample from './Sample.js'

const App= () => {
  
  // Using hooks
  const [state, setstate] = useState(1)

  function randomNumber()
  {
    let random = Math.floor(Math.random() * 10) + 1;
    setstate(random)

  }
  
  function restart()
  {
    setstate(1)
  }
  return (
    <div className="App">
      <h1>Number:{state}</h1>
      {state === 5 
        ? <div><h2>You Win !</h2><button onClick={()=>{restart()}}>Reset</button></div>
        : <button onClick={()=>{randomNumber()}}>Click Me !!!</button>    
      }
      <Sample/>
          
    </div>
  )
  }



export default App
