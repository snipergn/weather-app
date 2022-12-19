import React from 'react';
import './frontapp.css';

const Frontapp = () => {
  return (        
          <div className="container">
            <div className="input">
              <label for="fname">Your city is:  </label>
              <input type="search" id="fname" name="fname"/>
            </div>
            <div className="aboutday">
               <p> Hours </p>
               <p> Day </p>
               <p> Date </p>
               <p> Year </p>
            </div>
            <div className="main-items">
              <img/>
              <h1> Temp</h1>
              <p> Cloudly </p>
            </div>

            <div className="second-data">
              <p> Humudity </p> <br/>
              <p> Wind Speed </p>
            </div>
            <div className="display-second">
              <p> 45% </p>
              <p> 19.2 km/j</p>
            </div> 
          </div>
      
  );
}

export default Frontapp;
