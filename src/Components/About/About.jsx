import React from "react";
import "./About.css";
import farmer from "../../assets/farmer.jpg"
import Navbar from "../Navbar/Navbar";
const About = () => {
  return (
    <>
   <Navbar/>
    <div className="about-container">
      <h1 className="about-title">About AgroMarket</h1>
      <p className="about-description">
        Agromarket helps Nigerians farmers and traders make informed decisions
        by providing weather updates, crop recommendations, and market prices.
      </p>

      <div className="about-highlight">
        <img src={farmer} alt="Farmer" className="about-image" />
        <div className="about-highlight-text">
          <h2>Empowering Agriculture with Technology</h2>
          <p>
            Our platform offers essential insights aimed at improving
            agricultural productivity and profitability.
          </p>
        </div>
      </div>

      <h2 className="team-title">Our Team & Values</h2>

      <div className="team-cards">
        <div className="team-card">
          <span className="icon">👤</span>
          <h3>Experienced Team</h3>
          <p>
            Our team is composed of agricultural experts dedicated to supporting
            Nigerian farmers.
          </p>
        </div>

        <div className="team-card">
          <span className="icon">🤝</span>
          <h3>Farmer-Focused</h3>
          <p>
            We prioritize the needs of local farmers in every decision we make.
          </p>
        </div>

        <div className="team-card">
          <span className="icon">💡</span>
          <h3>Innovation</h3>
          <p>
            We leverage technology to bring innovative solutions to the
            agricultural sector.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
