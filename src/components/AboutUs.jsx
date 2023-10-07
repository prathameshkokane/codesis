import React from "react";
import Group1 from "../assets/Group1.png";
import Group2 from "../assets/Group2.png";
import Group3 from "../assets/Group3.png";
import Group4 from "../assets/Group4.png";
import Group5 from "../assets/Group5.png";
import "../styles/aboutus.scss";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="card1">
        <h4>- About Us</h4>
        <p>
          Lillypad is the only Real Estate Investment tool you need for your
          business
        </p>
      </div>
      <div className="card">
        <div className="heading">
          <img src={Group1} alt="" />
          <h3>Become a Data-Driven Invester</h3>
        </div>
        <p>
          Lilypads is the cloud-based real estate investment platform that helps
          you make data-driven investment decisions and assists with reaching
          your long term investment objectives.
        </p>
      </div>
      <div className="card">
        <div className="heading">
          <img src={Group2} alt="" />
          <h3>Lilypads can help you make smarter decisions.</h3>
        </div>
        <p>
          Streamline your investment evaluation process and collaborate in
          reaching your long term investment objectives
        </p>
      </div>
      <div className="card">
        <div className="heading">
          <img src={Group3} alt="" />
          <h3>Manager Due Diligence</h3>
        </div>
        <p>
          Evaluate managers against your objectives using traditional risk
          metrics with the addition of factor analysis. All it takes is a set of
          returns
        </p>
      </div>
      <div className="card">
        <div className="heading">
          <img src={Group4} alt="" />
          <h3>Optimize Asset Allocation</h3>
        </div>
        <p>
          Understand the underlying risk drivers in your portfolio using the
          Lilypads analysis factors and then optimize that portfolio based on
          objectives
        </p>
      </div>
      <div className="card">
        <div className="heading">
          <img src={Group5} alt="" />
          <h3>Our Subscribers</h3>
        </div>
        <p>
          Serving a constellation of global subscribers Pension funds, Funds of
          Funds, Banks, Family offices, Asset managers, Wealth Managers
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
