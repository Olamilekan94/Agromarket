import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Empowering Farmers with <br /> Weather &amp; Market Insights
          </h1>
          <p>
            Check weather, get crop suggestions, and view prices – all in one place
          </p>
          <button className="cta-btn" onClick={() => navigate("/weather")}>
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card weather" onClick={() => navigate("/weather")}>
          <div className="icon">🌦</div>
          <h3>Weather Insight</h3>
          <p>Get real-time weather updates for any city</p>
        </div>

        <div className="feature-card crops" onClick={() => navigate("/crops")}>
          <div className="icon">♻️</div>
          <h3>Crop Suggestion</h3>
          <p>Find crops that can thrive in current weather conditions</p>
        </div>

        <div className="feature-card prices" onClick={() => navigate("/prices")}>
          <div className="icon">💲</div>
          <h3>Market Prices</h3>
          <p>View the latest prices for key agricultural commodities</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
