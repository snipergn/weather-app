import React from "react";
import "./secondside.css";
const  Secondside = ({dataForecast}) => {
    const temperature = Math.round(dataForecast.map((item) => item[0].main.temp));
    const temperaturetwo = Math.round(dataForecast.map((item) => item[8].main.temp));
    const temperaturethree = Math.round(dataForecast.map((item) => item[16].main.temp));
    const temperaturefour = Math.round(dataForecast.map((item) => item[24].main.temp));

    return (
      <div>
        {dataForecast.map((item, index) => {
          return (
            <div key={index} className="container d-flex flex-row">
              <div className="card temp-1">
              <p>{item[0].dt_txt}</p>
                <img
                  className="card-img-top sm"
                  src={"http://openweathermap.org/img/w/"+ item[0].weather[0].icon +".png"}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{temperature}°C</h5>
                  <p>Humidity</p>
                  <span>{item[0].main.humidity}%</span>
                </div>
              </div>
              <div className="card temp-2">
              <p>{item[8].dt_txt}</p>
                <img
                  className="card-img-top sm"
                  src={`http://openweathermap.org/img/w/${item[8].weather[0].icon}.png`}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{temperaturetwo}°C</h5>
                  <p>Humidity</p>
                  <span>{item[8].main.humidity}%</span>
                </div>
              </div>
              <div className="card temp-3">
              <p>{item[16].dt_txt}</p>
                <img
                  className="card-img-top sm"
                  src={`http://openweathermap.org/img/w/${item[16].weather[0].icon}.png`}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{temperaturethree}°C</h5>
                  <p>Humidity</p>
                  <span>{item[16].main.humidity}%</span>
                </div>
              </div>
              <div className="card temp-4">
              <p>{item[24].dt_txt}</p>
                <img
                  className="card-img-top sm"
                  src={`http://openweathermap.org/img/w/${item[24].weather[0].icon}.png`}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{temperaturefour}°C</h5>
                  <p>Humidity</p>
                  <span>{item[24].main.humidity}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
}

export default Secondside;
