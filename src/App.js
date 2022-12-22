import './App.css';
import Mainside from './Components/mainside/mainside.js'
import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    data: [],
    weather: [],
    locationState: 'Bucharest'
  }
  this.handleNameChange = this.handleNameChange.bind(this);
}

componentDidMount() {
    let key = 'fd3b081fa5f1791533d9fa25f99be333';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +
     this.state.locationState + '&appid=' + key +'&units=metric' )

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


  handleNameChange = (event) => {
    this.setState({ locationState: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <Mainside 
        data={this.state.data} 
        name={this.state.locationState} 
        onNameChange={this.handleNameChange}/>

      </div>
      )
   }
}

export default App;
