import React, { Component } from "react";
import "./secondside.css";
class Secondside extends Component {
  
  render() {
  return (
    <div>
    { this.props.dataForecast.map((item, index) => {
    return (
    <div key = {index}
    className="container d-flex flex-row">
      <div className="card temp-1">
      <img className="card-img-top sm" 
      src={`http://openweathermap.org/img/w/${item[0].weather[0].icon}.png`}
      alt="Card cap" />
        <div className="card-body">
          <p>{item[0].dt_txt}</p>
          <h5 className="card-title">{item[0].main.temp}</h5>
          <p>Humidity</p>
          <span>{item[0].main.humidity}%</span>
        </div>
      </div>
      <div className="card temp-2">
        <img className="card-img-top sm" 
        src={`http://openweathermap.org/img/w/${item[8].weather[0].icon}.png`}
        alt="Card cap" />
        <div className="card-body">
          <p>{item[8].dt_txt}</p>
          <h5 className="card-title">{item[8].main.temp}</h5>
          <p>Humidity</p>
          <span>{item[8].main.humidity}%</span>
        </div>
      </div>
      <div className="card temp-3">
        <img className="card-img-top sm" 
         src={`http://openweathermap.org/img/w/${item[16].weather[0].icon}.png`}
         alt="Card cap" />
        <div className="card-body">
          <p>{item[16].dt_txt}</p>
          <h5 className="card-title">{item[16].main.temp}</h5>
          <p>Humidity</p>
          <span>{item[16].main.humidity}%</span>
        </div>
      </div>
      <div className="card temp-4">
        <img className="card-img-top sm" 
        src={`http://openweathermap.org/img/w/${item[24].weather[0].icon}.png`} 
        alt="Card cap" />
        <div className="card-body">
          <p>{item[24].dt_txt}</p>
          <h5 className="card-title">{item[24].main.temp}</h5>
          <p>Humidity</p>
          <span>{item[24].main.humidity}%</span>
        </div>
      </div>
    </div>
    
    )})
    }
    </div>
  )};
};

export default Secondside;
