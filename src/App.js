import './App.css';
import Frontapp from './Components/frontApp/frontapp.js'
import React, {Component} from 'react'

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    cities: []
  }
}

componentDidMount() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=fd3b081fa5f1791533d9fa25f99be333' )
  .then(response => response.json())
  .then(city => this.setState({cities: city}))
  .catch(err => console.log(err))
}

  


  render() {
  
  return (
    <div className="App">
    <Frontapp/>

    {/*  
    #1 Create input + Text for forecast
    #2 Add fetch from API for data.
    #3 Data from Api are Current Day, Next Day, Two Days, 
    Tree Days, Humidity, Wind Speed, Hours, Date, Year.
    #4 Create charts for display data more beautiful.
    */}
    </div>
    );
  }
}

export default App;
