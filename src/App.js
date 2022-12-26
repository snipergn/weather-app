import "./App.css";
import Mainside from "./Components/mainside/mainside.js";
import Secondside from "./Components/secondside/secondside";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataForecast: [],
      data: [],
      weather: [],
      wind: [],
      icon: "",
      locationState: "Bucharest",
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleGeolocation = this.handleGeolocation.bind(this);
    this.handleForecastLocation = this.handleForecastLocation.bind(this);
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

  handleForecastLocation = () => {
    const key = "fd3b081fa5f1791533d9fa25f99be333";
    const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      this.state.locationState +
      "&appid=" +
      key + 
      "&units=metric";
      fetch(url)
      .then((res) => res.json())
      .then((res) => {
        let forescastday = this.state.dataForecast.concat([res.list])
        let filterforecast = forescastday.filter((filtred) => filtred === res.list)
        console.log(filterforecast)
        this.setState({
          dataForecast: filterforecast
        })
      })
  }

  handleLocation = () => {
    const key = "fd3b081fa5f1791533d9fa25f99be333";
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      this.state.locationState +
      "&appid=" +
      key +
      "&units=metric";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const newData = this.state.data.concat([res.main]);
        const newWeather = this.state.data.concat([res.weather]);
        const newWindRes = this.state.data.concat([res.wind]);
        const filter = newData.filter((filtred) => res.main === filtred);
        const filterWeather = newWeather.filter(
          (filtred) => res.weather === filtred
        );
        const filtredWind = newWindRes.filter(
          (filtred) => filtred === res.wind
        );
        const iconName = filterWeather.map((item) => item[0].icon);
        const iconurl = "http://openweathermap.org/img/w/" + iconName + ".png";
        this.setState({
          data: filter,
          weather: filterWeather,
          wind: filtredWind,
          icon: iconurl,
        });
      })
      .catch(error => console.log(error, "Some error here with API Location"));
  };
  handleGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const API_KEY = "fd3b081fa5f1791533d9fa25f99be333";
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=1&appid=${API_KEY}`;
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let locationCity = res[0].name + ', ' + res[0].country
          this.setState({
            locationState: locationCity
          })
        })
    });
  };

  componentDidMount() {
    this.handleLocation();
    this.handleGeolocation();
    this.handleForecastLocation();
  }

  render() {
    return (
      <div className="App">
        <Mainside
          data={this.state.data}
          weather={this.state.weather}
          wind={this.state.wind}
          locationState={this.state.locationState}
          icon={this.state.icon}
          onSubmit={this.onSubmitHandler.bind(this)}
          onChangeEvent={this.onChangeHandler.bind(this)}
        />
        <Secondside
        dataForecast = {this.state.dataForecast}

        />
      </div>
    );
  }
}

export default App;
