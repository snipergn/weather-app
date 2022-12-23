import React, { Component } from "react";
import "./mainside.css";

class Mainside extends Component {

  render() {
    return (
      <>
        {this.props.data.map((main, index) => {
          return (
            <div className="container" key={index}>
              <div className="aboutday">
                <p> Hours</p>
                <p> Day </p>
                <p> Date </p>
                <p> Year </p>
              </div>
			  { this.props.weather.map((item) => {
				return (
				<div id={item[0].id} className="main-items">
                <img />
                <h1>The temperature is {main.temp} C</h1>
                <p> {item[0].main} </p>
              </div>
				)
			  	})
			  }

              <div className="second-data">
                <p> Humidity Level is {main.humidity}% </p> <br />
                <p> Wind Speed </p>
              </div>
              <div className="display-second">
                <p> 45% </p>
                <p> 19.2 km/j</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Mainside;
