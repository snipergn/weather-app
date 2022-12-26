import "./secondside.css";
import React from "react";
const Secondside = ({ dataForecast }) => {
  return (
    <div>
    { dataForecast.map(item => {
    return (
    <div className="container d-flex flex-row-reverse">
      <div class="card">
        <img class="card-img-top" src="..." alt="Card cap" />
        <div class="card-body">
          <h5 class="card-title">{item[0].main.temp}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
    )
    })
    }
    </div>
  );
};

export default Secondside;
