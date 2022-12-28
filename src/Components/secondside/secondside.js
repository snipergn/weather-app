import React from "react";
import "./secondside.css";
const Secondside = ({ dataForecast }) => {
  const temperature = Math.round(dataForecast.map((item) => item[0].main.temp));
  const temperaturetwo = Math.round(
    dataForecast.map((item) => item[8].main.temp)
  );
  const temperaturethree = Math.round(
    dataForecast.map((item) => item[16].main.temp)
  );
  const temperaturefour = Math.round(
    dataForecast.map((item) => item[24].main.temp)
  );


  return (
    <div>
      {dataForecast.map((item, index) => {
        return (
          <div key={index} className="container-second d-flex justify-content-end  ">
            <div className="card temp-1">
              <p className="mx-auto day-title ">Today</p>
              <img
                className="card-img-top mx-auto "
                src={`http://openweathermap.org/img/w/${item[0].weather[0].icon}.png`}
                alt="Card cap"
              />
              <div className="card-body ">
                <h4 className="card-title h3 ">{temperature}°C</h4>
                <p className="humidity">Humidity</p>
                <span className="humidity-item">{item[0].main.humidity}%</span>
              </div>
            </div>
            <div className="card temp-2">
              <p className="mx-auto day-title">{item[8].dt_txt.substring(0, item[8].dt_txt.length - 8 )}</p>
              <img
                className="card-img-top mx-auto"
                src={`http://openweathermap.org/img/w/${item[8].weather[0].icon}.png`}
                alt="Card cap"
              />
              <div className="card-body">
                <h4 className="card-title h3">{temperaturetwo}°C</h4>
                <p className="humidity">Humidity</p>
                <span className="humidity-item">{item[8].main.humidity}%</span>
              </div>
            </div>
            <div className="card temp-3">
              <p className="mx-auto day-title">{item[16].dt_txt.substring(0, item[16].dt_txt.length - 8 )}</p>
              <img
                className="card-img-top mx-auto"
                src={`http://openweathermap.org/img/w/${item[16].weather[0].icon}.png`}
                alt="Card cap"
              />
              <div className="card-body">
                <h4 className="card-title h3">{temperaturethree}°C</h4>
                <div >
                <p className="humidity">Humidity</p>
                <span className="humidity-item">{item[16].main.humidity}%</span>
                </div>
              </div>
            </div>
            <div className="card temp-4">
              <p className="mx-auto day-title">{item[24].dt_txt.substring(0, item[24].dt_txt.length - 8 )}</p>
              <img
                className="card-img-top mx-auto"
                src={`http://openweathermap.org/img/w/${item[24].weather[0].icon}.png`}
                alt="Card cap"
              />
              <div className="card-body">
                <h4 className="card-title h3">{temperaturefour}°C</h4>
                <div>
                <p className="humidity">Humidity</p>
                <span className="humidity-item">{item[24].main.humidity}%</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Secondside;
