import React from "react";
import "./secondside.css";
const Secondside = ({ dataForecast }) => {
  return (
    <div className="d-flex flex-sm-row row container-fluid mt-5 mr-5  ">
      {dataForecast.map((item, index) => {
        return (
          <div
            key={index}
            className=" d-flex justify-content-end col-lg-2 gx-0 "
          >
            <div className="card">
              <p className="mx-auto day-title">{update}</p>
              <img
                className="card-img-top mx-auto "
                src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                alt="Card cap"
              />
              <div className="card-body ">
                <h3 className="card-title ">
                  {Math.round(item.temp.day)}°C/
                  <span className="h4 text-secondary">
                    {Math.round(item.temp.night)}°C
                  </span>
                </h3>
                <p className="humidity">Humidity</p>
                <span className="humidity-item">
                  {Math.round(item.humidity)}%
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Secondside;
