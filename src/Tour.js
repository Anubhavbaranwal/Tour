import React from "react";
import Tours from "./Tours";

const Tour = ({ tours, removeTour }) => {
  //   console.log(tours);
  return (
    <div className="tour">
      <div>
        <h1>Our Tours</h1>
        <div>
          {tours.map((tours) => {
            return <Tours key={tours.id} {...tours} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Tour;
