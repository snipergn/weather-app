import './App.css';
import Frontapp from './Components/frontApp/frontapp.js'
import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    data: [],
    weather: []
  }
}

   componentDidMount() {
    let location = 'London';
    let key = 'fd3b081fa5f1791533d9fa25f99be333';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + key  )
    .then(res => res.json())
    .then(res => this.setState({
      data: res.main,
      weather: res.weather
    }))

  }
  render() {
    let array = Array.from(this.state.data)
    return array.map((item) => {
      <h1>{item}</h1>
    })}
   
}

export default App;
