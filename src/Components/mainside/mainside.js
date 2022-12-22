import React, { Component } from 'react';
import './mainside.css';

class Mainside extends Component  {

  

  render() {
    console.log(this.props.locationState)
  return (     
      <>
      { this.props.data.map((main, index) => {
        return (
          <div className="container" key={index}>
          <form>
            <div className="input">
              <label for="fname">Your city is:  </label>
              <input type="text" id="fname" name="fname" 
              onChange={this.handleNameChange} 
              value={this.props.locationState} />
            </div>
          </form>
            <div className="aboutday">
               <p> Hours </p>
               <p> Day </p>
               <p> Date </p>
               <p> Year </p>
            </div>
            <div className="main-items">
              <img/>
              <h1>The temperature is {main.temp} C</h1>
              <p> Cloudly </p>
            </div>

            <div className="second-data">
              <p> Humidity Level is {main.humidity}% </p> <br/>
              <p> Wind Speed </p>
            </div>
            <div className="display-second">
              <p> 45% </p>
              <p> 19.2 km/j</p>
            </div> 
          </div>
          )
      })
          
        }
      </>

    );
  }
}

export default Mainside;
