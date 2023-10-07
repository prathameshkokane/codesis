import React from "react";
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";
import Arrow from "../assets/arrow.svg";
import "../styles/hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h5>- Welcome To the</h5>
        <h1>
          Unprecedented Era of <span>Real Estate Investing</span>
        </h1>
        <p style={{ opacity: "0.5" }}>
          Lilypads uses sophisticated technologies for data-driven decisions in
          investing, managing and funding commercial real estate assets
        </p>
        <button>
          Start Investing Now <img src={Arrow} alt="" />
        </button>
        <div className="count">
          <div>
            <h4>658+</h4>
            <p>Properties Registered</p>
          </div>
          <div>
            <h4>658+</h4>
            <p>Deals Cracked</p>
          </div>
          <div>
            <h4>255+</h4>
            <p>Invester</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={Frame1} alt="" />
        <img src={Frame2} alt="" />
      </div>
    </div>
  );
};

export default Hero;
