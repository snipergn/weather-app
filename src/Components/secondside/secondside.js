import React from "react";
import "./secondside.css";
const Secondside = ({ dataForecast }) => { 
  
 
  return (
<<<<<<< HEAD
    <div className="d-flex flex-sm-row row containers ">
      {dataForecast.map((item, index) => {
        return (
          <div
            key={index}
            className=" d-flex justify-content-end col-sm-2">
                <div className="card ">
                  <p className="mx-auto day-title">{item.dt_txt}</p>
=======

    <div className="d-flex flex-sm-row row container-fluid mt-5 mr-5  ">
      {dataForecast.map((item, index) => {
        const update = new Date(item.dt* 1000).toLocaleDateString('en-US')
        return (
          <div
            key={index}
            className=" d-flex justify-content-end col-lg-2 gx-0 ">
                <div className="card">
                  <p className="mx-auto day-title">{update}</p>
>>>>>>> parent of 2e7b1987 (new commit)
                  <img
                    className="card-img-top mx-auto "
                    src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                    alt="Card cap"
                  />
                  <div className="card-body ">
<<<<<<< HEAD
                    <h3 className="card-title ">{item.main.temp}°C</h3>
                    <p className="humidity">Humidity</p>
                    <span className="humidity-item">{item.main.humidity}%</span>
=======
                    <h3 className="card-title ">{Math.round(item.temp.day)}°C/<span className="h4 text-secondary">{Math.round(item.temp.night)}°C</span></h3>
                    <p className="humidity">Humidity</p>
                    <span className="humidity-item">{Math.round(item.humidity)}%</span>
>>>>>>> parent of 2e7b1987 (new commit)
                  </div>
                </div>
              </div>
        );
      })}
    </div>
  );
};

export default Secondside;
