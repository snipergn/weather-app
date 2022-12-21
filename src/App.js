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
}

componentDidMount() {
    let key = 'fd3b081fa5f1791533d9fa25f99be333';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.state.locationState + '&appid=' + key +'&units=metric' )
    .then(res => res.json())
    .then(res => { 
      let newData = this.state.data.concat([res.main]);
      let newWeather = this.state.data.concat([res.weather]);
      let filter = newData.filter(filtred => res.main === filtred )
      this.setState({
        data: filter,
        weather: newWeather
    })})
  }


    fetchLocation = (e) => {     
        this.setState({locationState: e.target.value})
    
    }

  render() {
    let fetchLocStore = this.fetchLocation.bind(this)
    return (
      <div className="App">
        <Mainside data={this.state.data} handleChange={fetchLocStore} value = {this.locationState}/>

      </div>
      )
   }
}

export default App;
