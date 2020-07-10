import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       num:1
    }
  }

  randomNumber(){
    let random = Math.floor(Math.random() * 10) + 1
    this.setState({num:random})
  }
  
  render() {
    return (
      <div className="App">
        <h1>Number:{this.state.num}</h1>
        {this.state.num === 7 
          ? <div><h2>You Win !</h2><button>Reset</button></div>
          : <button onClick={()=>{this.randomNumber()}}>Click Me !!!</button>    
        }
            
      </div>
    )
  }
}

export default App
