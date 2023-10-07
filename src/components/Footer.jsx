import React from "react";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Linkedin from "../assets/Linkedin.png";
import Youtube from "../assets/Youtube.png";
import Medium from "../assets/Medium.png";
import Pinterest from "../assets/Pinterest.png";
import Logo from "../assets/Logo.png";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="newsletter">
          <input type="text" placeholder="Enter Your Email Here" />
          <button>Subscribe To Newsletter</button>
        </div>
        <h2>Signup and start enjoying the benifits today!</h2>
        <button className="signup_btn">Sign up to Lilypads</button>
        <div className="socialicons">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Youtube} alt="" />
          <img src={Medium} alt="" />
          <img src={Pinterest} alt="" />
        </div>
      </div>

      <div className="right">
        <img src={Logo} alt="" />
        <ul>
          <p>Reach Us At</p>
          <li>6751 Columbia Gateway Dr,</li>
          <li>3rd floor, Columbia,</li>
          <li>MD 21046</li>
        </ul>
        <div></div>
        <ul>
          <p>Network</p>
          <li>Community</li>
          <li>Invester</li>
          <li>Broker</li>
        </ul>
        <ul>
          <p>Product</p>
          <li>Invest</li>
          <li>Discover</li>
          <li>Transact</li>
          <li>Manage</li>
        </ul>
        <ul>
          <p>Our Story</p>
          <li>Approch</li>
          <li>AboutUs</li>
        </ul>

        <ul>
          <p>Technology</p>
          <li>Artifical Intelligence</li>
          <li>Block Chain</li>
        </ul>
        <ul>
          <p>Highlights</p>
          <li>
            Impact of COVID-19 on the food and beverage industry and the retail
            sector
          </li>
          <li>Commercial lending during COVID-19: navigating the impact</li>
        </ul>
        <ul>
          <p>Knowledge Center</p>
          <li>Resource</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
