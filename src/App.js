import './App.css';
import Mainside from './Components/mainside/mainside.js'
import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    data: [],
    weather: [],
    locationState: 'London'
  }
  this.fetchData = this.fetchData.bind(this)
}

   fetchData = () => {
    let key = 'fd3b081fa5f1791533d9fa25f99be333';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.state.locationState + '&appid=' + key  )
    .then(res => res.json())
    .then(res => { 
      let newData = this.state.data.concat([res.main]); 
      let newWeather = this.state.data.concat([res.weather]);  
      this.setState({
        data: newData,
        weather: newWeather
    })})
  }

   componentDidMount() {
      this.fetchData()
    }

  render() {
    return (
      <div className="App">
        <Mainside data={this.state.data}/>

      </div>
      )
   }
}

export default App;
