import React from "react";
import "./mainside.css";

const Mainside = ({data, weather, wind, icon, locationState, onChangeEvent, onSubmit}) => {
  const date = new Date();
  const hoursnow = date.getHours() + ' ' + date.getMinutes();
  const datenow = date.getDate() + '.' + date.getUTCMonth() + '.' + date.getFullYear();
  const weekday=new Array(7);
  weekday[0]="Sunday";
  weekday[1]="Monday";
  weekday[2]="Tuesday";
  weekday[3]="Wednesday";
  weekday[4]="Thursday";
  weekday[5]="Friday";
  weekday[6]="Saturday";

  const daynow = weekday[date.getDay()]
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
        {data.map((main, index) => {
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
                    <img className="photo" alt="weather" src={icon} />
                    <h1>The temperature is {main.temp} C</h1>
                    <p> {item[0].main} </p>
                  </div>
                );
              })}
              {wind.map((item) => {
                return (
                  <div className="second-data" key={item.id}>
                    <p> Humidity Level is </p>
                    <br />
                    <span> {main.humidity}%</span>
                    <p> Wind Speed is </p>
                    <br />
                    <span>{item.speed} km/j</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }

export default Mainside;
