import "./App.css";
import Mainside from "./Components/mainside/mainside.js";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      weather: [],
      locationState: "Bucharest",
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  

  onChangeHandler(event){
    this.setState({
      locationState: event.target.value
    })
  }

  onSubmitHandler(e){
    e.preventDefault();
    let cityName = this.state.locationState;
    this.handleLocation(cityName);
  }

  handleLocation = (value) => {
    let key = "fd3b081fa5f1791533d9fa25f99be333";
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        this.state.locationState +
        "&appid=" +
        key +
        "&units=metric"
    )
      .then((res) => res.json())
      .then((res) => {
        let newData = this.state.data.concat([res.main]);
        let newWeather = this.state.data.concat([res.weather]);
        let filter = newData.filter((filtred) => res.main === filtred);
        let filterWeather = newWeather.filter(
          (filtred) => res.weather === filtred
        );
        this.setState({
          data: filter,
          weather: filterWeather,
        });
      });
  };

    componentDidMount() {
      this.handleLocation()
    }
  render() {
    return (
      <div className="App">
        <form on onSubmit={this.onSubmitHandler}>
          <label for="fname">Your city is: </label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={this.onChangeHandler} 
            value={this.state.locationState}
          />
          <input type="submit" value="Submit" />
          <br></br>
          <br></br>
        </form>
        <Mainside
          data={this.state.data}
          weather={this.state.weather}          

        />
      </div>
    );
  }
}

export default App;
