import React from 'react';
import './mainside.css';

const Mainside = ({data, handleChange, value }) => {
  return (     
      <>
      { data.map((main, index) => {
        return (
          <div className="container" key={index}>
            <div className="input">
              <label for="fname">Your city is:  </label>
              <input type="search" id="fname" name="fname" value={value} onChange={handleChange} />
            </div>
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

export default Mainside;
