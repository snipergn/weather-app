import "./App.css";
import Mainside from "./Components/mainside/mainside.js";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      weather: [],
      wind: [],
      icon: '',
      locationState: "Bucharest",
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleGeolocation = this.handleGeolocation.bind(this);
  }

  onChangeHandler(event) {
    this.setState({
      locationState: event.target.value,
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    let cityName = this.state.locationState;
    this.handleLocation(cityName);
  }

  handleLocation = () => {
    const key = "fd3b081fa5f1791533d9fa25f99be333";
    const url = 'http://api.openweathermap.org/data/2.5/'
    fetch(
      url 
      + "weather?q=" 
      + this.state.locationState 
      + "&appid=" 
      + key 
      + "&units=metric"
    )
      .then((res) => res.json())
      .then((res) => {
        let newData = this.state.data.concat([res.main]);
        let newWeather = this.state.data.concat([res.weather]);
        let newWindRes = this.state.data.concat([res.wind]);
        let filter = newData.filter((filtred) => res.main === filtred);
        let filterWeather = newWeather.filter((filtred) => res.weather === filtred);
        let filtredWind = newWindRes.filter((filtred) => filtred === res.wind)
        const iconName = filterWeather.map(item => item[0].icon)
        let iconurl = "http://openweathermap.org/img/w/" + iconName + ".png";
        this.setState({
          data: filter,
          weather: filterWeather,
          wind: filtredWind,
          icon: iconurl
        });
      });
  };
  handleGeolocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });

  }

  componentDidMount() {
    this.handleLocation();
    this.handleGeolocation();
  }
  
  render() {
    return (
      <div className="App">     
        <Mainside 
        data={this.state.data} 
        weather={this.state.weather} 
        wind = {this.state.wind}
        icon = {this.state.icon}
        onSubmit = {this.onSubmitHandler.bind(this)}
        onChangeEvent = {this.onChangeHandler.bind(this)}
        />
      </div>
    );
  }
}

export default App;
