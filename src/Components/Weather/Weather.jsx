import React, { useState } from "react";
import "./Weather.css";
import Navbar from "../Navbar/Navbar";

const WeatherCheck = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "18c597789aa81a427df60c9307972b88"; 

  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city");
      return;
    }
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},NG&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        setError("City not found, try another state");
        setWeather(null);
        return;
      }

      setWeather({
        name: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        condition: data.weather[0].description,
      });
    } catch (err) {
      setError("Error fetching data");
      setWeather(null);
    }
  };

  // ✅ Function to suggest crops based on weather
  const getCropSuggestions = (temp, humidity, condition) => {
    let suggestions = [];

    if (temp >= 25 && temp <= 35 && humidity >= 60) {
      suggestions.push("Rice", "Cassava", "Yam", "Maize");
    }
    if (temp >= 20 && temp <= 30 && humidity >= 40 && humidity <= 70) {
      suggestions.push("Tomato", "Soybean", "Groundnut");
    }
    if (temp >= 18 && temp <= 25 && humidity >= 50) {
      suggestions.push("Vegetables (Spinach, Cabbage, Lettuce)");
    }
    if (temp >= 30 && humidity >= 70) {
      suggestions.push("Oil Palm", "Sugarcane", "Plantain");
    }
    if (suggestions.length === 0) {
      suggestions.push("No specific crop found for this condition. Try greenhouse farming.");
    }

    return suggestions;
  };

  return (
    <>
      <Navbar />
      <div className="weather-container">
        <h1 className="title">
          <span className="icon">☁️</span> Weather Check
        </h1>
        <p className="subtitle">Enter any Nigerian state or town to discover its weather and best-growing crops:</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter State (e.g Lagos)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={getWeather}>Search</button>
        </div>

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-card">
            <h2>Weather in {weather.name}</h2>
            <div className="weather-details">
              <div>
                <p>Temperature</p>
                <strong>{weather.temp} ºC</strong>
              </div>
              <div>
                <p>Humidity</p>
                <strong>{weather.humidity} %</strong>
              </div>
              <div>
                <p>Wind Speed</p>
                <strong>{weather.wind} m/s</strong>
              </div>
              <div>
                <p>Condition</p>
                <strong>{weather.condition}</strong>
              </div>
            </div>

            {/* ✅ Crop Recommendations */}
            <div className="crop-suggestions">
              <h3>Recommended Crops 🌱</h3>
              <ul>
                {getCropSuggestions(
                  weather.temp,
                  weather.humidity,
                  weather.condition
                ).map((crop, index) => (
                  <li key={index}>{crop}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherCheck;
