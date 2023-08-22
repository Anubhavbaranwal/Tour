import React, { useState } from "react";

const Tours = ({ id, name, info, image, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  return (
    <div className="tours">
      <img src={image} alt={name} />
      <div className="right">
        <h4>{name}</h4>
        <h4>${price}</h4>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadmore(!readmore)}>
            {readmore ? " Show Less" : "Show More"}
          </button>
        </p>
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </div>
  );
};

export default Tours;
