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
    <div className="container margin-top h-100">
      <div className="formData  ">
        <form onSubmit={onSubmit} className=" input-group-lg mt-5 ">
          <label className="p-3 inputlabel " htmlFor="fname">
            Your city: {" "}
          </label>
          <input
            className="p-3 inputdata"
            type="text"
            id="fname"
            name="fname"
            onChange={onChangeEvent}
            value={locationState}
          />
        </form>
      </div>
      {data.map((main, index) => {
        return (
          <div key={index}>
            <div className=" mt-5">
              <p className="dataNow">{hoursnow}, {daynow}, {datenow} </p>
            </div>
            {weather.map((item, index) => {
              return (
                <div
                  className="main-items "
                  key={index}
                >
                  <div className="d-flex">
                    <img className="photo" alt="weather" src={icon} />
                    <p className="temperature">{temperature}°C</p>
                  </div>
                  <br/>
                  <p className="h3 main-clear"> {item[0].main} </p>
                </div>
              );
            })}
            {wind.map((item, index) => {
              return (
                <div key={index}
                  className="hum-speed-con d-flex flex-row align-items-center"
                >
                  <div>
                    <p className="humidity">Humidity </p>
                    <span className="h3 hum"> {main.humidity}%</span>
                  </div>
                  <div>
                    <p className="wind-speed"> Wind Speed </p>
                    <span className="h3 wind">{item.speed} km/h</span>
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
