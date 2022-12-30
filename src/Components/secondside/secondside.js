import React from "react";
import "./secondside.css";
const Secondside = ({ dataForecast }) => {
  return (
    <div className="d-flex flex-sm-row row containers ">
      {dataForecast.map((item, index) => {
        return (
          <div
            key={index}
            className=" d-flex justify-content-end col-sm-2">
                <div className="card ">
                  <p className="mx-auto day-title">{item.dt_txt}</p>
                  <img
                    className="card-img-top mx-auto "
                    src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                    alt="Card cap"
                  />
                  <div className="card-body ">
                    <h3 className="card-title ">{item.main.temp}°C</h3>
                    <p className="humidity">Humidity</p>
                    <span className="humidity-item">{item.main.humidity}%</span>
                  </div>
                </div>
              </div>
        );
      })}
    </div>
  );
};

export default Secondside;
