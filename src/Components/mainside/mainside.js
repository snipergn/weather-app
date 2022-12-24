import React from "react";
import "./mainside.css";

const Mainside = ({data, weather, wind, icon, locationState, onChangeEvent, onSubmit,}) => {

    const date = new Date();
    const hoursnow = date.toLocaleTimeString();
    const datenow = date.toLocaleDateString()
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const daynow = weekday[date.getDay()];
    const temperature = Math.round(data.map((item) => item.temp))
 
    return (
      <div>
        <div className="formData">
          <form onSubmit={onSubmit}>
            <label for="fname">Your city is: </label>
            <input
              type="text"
              id="fname"
              name="fname"
              onChange={onChangeEvent}
              value={locationState}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        {
        data.map((main, index) => {
          return (
            <div className="container" key={index}>
              <div className="aboutday">
                <p>{hoursnow}</p>
                <p> {daynow} </p>
                <p> {datenow} </p>
              </div>
              {weather.map((item) => {
                return (
                  <div className="main-items" key={item.id}>
                    <img className="photo" alt="weather" src={icon}/>
                    <h1>temperature <br/></h1>
                    <p className="temperature">{temperature}°C</p>
                    <p> {item[0].main} </p>
                  </div>
                );
              })}
              {wind.map((item) => {
                return (
                  <div className="second-data" key={item.id}>
                    <p> Humidity </p>
                    <br />
                    <span> {main.humidity}%</span>
                    <p> Wind Speed </p>
                    <br />
                    <span>{item.speed} km/h</span>
                  </div>
                );
              })}
            </div>
          );
        })
        
        }
      </div>
    );
  }

export default Mainside;
