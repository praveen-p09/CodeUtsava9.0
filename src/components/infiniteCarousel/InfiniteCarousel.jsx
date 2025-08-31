import React from "react";

import "./InfiniteCarousel.css";

const InfiniteCarousel = ({ sponsers }) => {
  return (
    <div className="codeutsava__sponsers-carousel-container">
      <div className="codeutsava__sponsers-carousel">
        {sponsers.map((sponser, index) => {
          return (
            <div className="codeutsava__sponsers-carousel-item" key={index}>
              <img alt={sponser.alt} src={sponser.img} />
            </div>
          );
        })}
        <div style={{ margin: "0px 15vw", display: "inline-block" }}></div>
        {sponsers.map((sponser, index) => {
          return (
            <div className="codeutsava__sponsers-carousel-item" key={index}>
              <img alt={sponser.alt} src={sponser.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
