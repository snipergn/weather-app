import React from "react";
import "./mainside.css";
const Mainside = ({
  data,
  weather,
  wind,
  icon,
  locationState,
  onChangeEvent,
  onSubmit,
}) => {
  const date = new Date();
  const hoursnow = date.toLocaleTimeString();
  const datenow = date.toLocaleDateString();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const daynow = weekday[date.getDay()];
  const temperature = Math.round(data.map((item) => item.temp));

  return (
    <div className="container justify-content-center align-items-center align-items-center">
      <div className="formData ">
        <form onSubmit={onSubmit} className="input-group input-group-lg mt-5 ">
          <label className="p-2" for="fname">
            Your city is:{" "}
          </label>
          <input
            className="p-2"
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
          <div key={index}>
            <div className="d-flex mt-5 ">
              <p className="col-1">{hoursnow}</p>
              <p className="col-1"> {daynow} </p>
              <p className="col-1"> {datenow} </p>
            </div>
            {weather.map((item) => {
              return (
                <div
                  className="main-items d-flex flex-row align-items-center"
                  key={item.id}
                >
                  <div>
                    <img className="photo" alt="weather" src={icon} />
                    <p className="h3"> {item[0].main} </p>
                  </div>
                  <div className="temp">
                    <p className="h">
                      temperature <br />
                    </p>
                    <p className="h3">{main.temp}°C</p>
                  </div>
                </div>
              );
            })}
            {wind.map((item) => {
              return (
                <div
                  className="second-data mt-5 d-flex flex-row align-items-center"
                  key={item.id}
                >
                  <div>
                    <p> Humidity </p>
                    <span className="h3"> {main.humidity}%</span>
                  </div>
                  <div>
                    <p> Wind Speed </p>
                    <span className="h3">{item.speed} km/h</span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Mainside;
