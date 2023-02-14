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
      locationState: "Bucharest",
      lat: "44.4361414",
      lon: "26.1027202",
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onLocationState = this.onLocationState.bind(this);
    this.onLocationState = this.onLocationState.bind(this);
    this.handleGeolocation = this.handleGeolocation.bind(this);
  }

  onChangeHandler(event) {
    this.setState({
      locationState: event.target.value,
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.onLocationState();
    this.handleLocation();
  }

  onLocationState = () => {
    let lat = this.state.lat;
    let lon = this.state.lon;
    const key = process.env.KEY_API;
        const urlfor = "https://api.openweathermap.org/data/3.0/onecall?lat=" + 
        lat + "&lon=" + lon + "&exclude=hourly,minutely&appid=" + key + "&units=metric";
    fetch(urlfor)
      .then((res) => res.json())
      .then((res) => {
        const current = this.state.data.concat([res.current]);
        const filtercurrent = current.filter(
          (filtred) => res.current === filtred
        );
        const daily = this.state.dataForecast.concat([res.daily]);
        const filterdaily = daily.filter((filtred) => res.daily === filtred);
        let objectkey = filterdaily[Object.keys(filterdaily)[0]];

        this.setState({
          data: filtercurrent,
          dataForecast: objectkey,
        });
        console.log(filtercurrent);
      })
      .catch((error) =>
        console.log(error, "Some error here with API Location")
      );
  };

  handleLocation = () => {
    const key = process.env.KEY_API;
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      this.state.locationState +
      "&appid=" +
      key +
      "&units=metric";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const coord = this.state.data.concat([res.coord]);
        const filterCoord = coord.filter((filtred) => res.coord === filtred);
        this.setState({
          lat: filterCoord[0].lat,
          lon: filterCoord[0].lon,
        });
      })
      .catch((error) =>
        console.log(error, "Some error here with API Location")
      );
  };
  handleGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const API_KEY = process.env.KEY_API;
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=1&appid=${API_KEY}`;
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let locationCity = res[0].name + ", " + res[0].country;
          this.setState({
            locationState: locationCity,
          });
        })
        .catch((error) =>
          console.log(error, "Some error here with Geolocation Finder")
        );
    });
  };

  componentDidMount() {
    this.onLocationState();
    this.handleLocation();
    this.handleGeolocation();
  }

  render() {
    return (
      <div className="App">
        <Mainside
          data={this.state.data}
          locationState={this.state.locationState}
          onSubmit={this.onSubmitHandler.bind(this)}
          onChangeEvent={this.onChangeHandler.bind(this)}
        />
        <Secondside dataForecast={this.state.dataForecast} />
      </div>
    );
  }
}

export default App;
