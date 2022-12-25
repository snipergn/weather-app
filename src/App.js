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
      icon: "",
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
    const url = "http://api.openweathermap.org/data/2.5/";
    fetch(
      url +
        "weather?q=" +
        this.state.locationState +
        "&appid=" +
        key +
        "&units=metric"
    )
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
      .catch((err) => console.log("Some error here with API Location"));
  };
  handleGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const API_KEY = "AIzaSyDi9z0r02RbC16GjL-d2qufFe6gwhYgW14";
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let address = data.results[0].formatted_address;
          address = address.substring(8);
          this.setState({
            locationState: address,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

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
          wind={this.state.wind}
          locationState={this.state.locationState}
          icon={this.state.icon}
          onSubmit={this.onSubmitHandler.bind(this)}
          onChangeEvent={this.onChangeHandler.bind(this)}
        />
      </div>
    );
  }
}

export default App;
