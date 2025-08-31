import React from "react";
import "./Section6.css";
import sponsers from "../../../../assets/data/sponsersData.js";
import cauldron from "../../../../assets/images/cauldron.png";
import InfiniteCarousel from "../../../../components/infiniteCarousel/InfiniteCarousel.jsx";
import sbi from "../../../../assets/images/sponsers/sponser17.webp";

const Section6 = () => {
  return (
    <div className="codeutsava__section6" id="sponsers">
      <div className="codeutsava__section6-body">
        <div className="codeutsava__section6-title">
          <img src={cauldron}></img>
          Sponsors
        </div>
        <div className="codeutsava__section6-content">
          On behalf of team TCP, we would like to publicly thank the generous
          sponsors without whom this event could not be held so smoothly.
        </div>
        <div className="codeutsava__section6-sponsers">
          {/* <div className="codeutsava__section6-sponser-title">
            Title Sponsor
          </div>
          <div className="codeutsava__section6-sponser-list">
            <img src={sbi} style={{width: '300px'}}/>
          </div> */}
          {/* <div className="codeutsava__section6-sponser-title">
            Platinum Sponsors
          </div>
          <div className="codeutsava__section6-sponser-list platinum">
            <InfiniteCarousel sponsers={sponsers.platinum} />
          </div> */}
          <div className="codeutsava__section6-sponser-title">
            Gold Sponsors
          </div>
          <div className="codeutsava__section6-sponser-list gold">
            <InfiniteCarousel sponsers={sponsers.gold} />
          </div>
          <div className="codeutsava__section6-sponser-title">
            Bronze Sponsors
          </div>
          <div className="codeutsava__section6-sponser-list bronze">
            <InfiniteCarousel sponsers={sponsers.partners} />
          </div>

          {/* <div className="codeutsava__section6-sponser-title">
            Bronze Sponsors
          </div>
          <div className="codeutsava__section6-sponser-list bronze">
            {sponsers.bronze.map((sponser, index) => (
              <div className="codeutsava__section6-sponser-image">
                <img key={index} src={sponser.img} />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section6;
