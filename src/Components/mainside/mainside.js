import React from "react";
import "./mainside.css";
const Mainside = ({ data, locationState, onChangeEvent, onSubmit }) => {
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

  return (
    <div className="container margin-top tex justify-content-center flex-nowrap">
      <div className="row ">
        <div className="formData">
          <form onSubmit={onSubmit} className=" input-group-lg mt-5 ">
            <label className="p-3 inputlabel " htmlFor="fname">
              Your city:{" "}
            </label>
            <input
              className="p-3 inputdata"
              type="text"
              id="fname"
              name="fname"
              onChange={onChangeEvent}
              value={locationState}
            />
            <br />
            <button type="button submit" class="btn btn-primary mt-3">
              Update Location
            </button>
          </form>
        </div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div className=" mt-5">
                <p className="dataNow">
                  {hoursnow}, {daynow}, {datenow}{" "}
                </p>
              </div>

              <div className="main-items ">
                <div className="d-flex">
                  <img
                    className="photo"
                    alt="weather"
                    src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  />
                  <p className="temperature">{Math.round(item.temp)}°C</p>
                </div>
                <br />
                <p className="h3 main-clear"> </p>
              </div>

              <div className="hum-speed-con d-flex flex-row align-items-center">
                <div className="col-1">
                  <p className="humidity">Humidity </p>
                  <span className="h3 hum">{item.humidity}%</span>
                </div>
                <div className="col-1">
                  <p className="wind-speed"> Wind Speed </p>
                  <span className="h3 wind">{item.wind_speed} km/h</span>
                </div>
                <div className="col-1">
                  <p className="feels-like"> Feels Like </p>
                  <span className="h3 feels">
                    {Math.round(item.feels_like)}°C
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mainside;