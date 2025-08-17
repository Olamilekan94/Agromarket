import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Crops.css";

// Example crop database
const cropData = [
  {
    name: "Maize",
    states: ["Kano", "Kaduna", "Oyo", "Benue", "Plateau"],
    weather: "20–30°C, moderate rainfall, humidity 50–70%",
  },
  {
    name: "Rice",
    states: ["Kebbi", "Niger", "Kano", "Ebonyi", "Anambra"],
    weather: "22–32°C, high rainfall, humidity 70–90%",
  },
  {
    name: "Cassava",
    states: ["Ogun", "Oyo", "Ondo", "Cross River", "Enugu"],
    weather: "25–35°C, humid, moderate to heavy rainfall",
  },
  {
    name: "Cocoa",
    states: ["Ondo", "Osun", "Ekiti", "Cross River", "Ogun"],
    weather: "21–28°C, high humidity, heavy rainfall",
  },
  {
    name: "Groundnut",
    states: ["Kano", "Katsina", "Kaduna", "Borno", "Niger"],
    weather: "25–35°C, low rainfall, dry climate",
  },
];

const CropsPage = () => {
  const [search, setSearch] = useState("");
  const [filteredCrop, setFilteredCrop] = useState(null);

  const handleSearch = () => {
    const crop = cropData.find(
      (c) => c.name.toLowerCase() === search.toLowerCase()
    );
    setFilteredCrop(crop || null);
  };

  return (
    <>
      <Navbar />
      <div className="crops-container">
        <h1 className="title">🌱 Crops Information</h1>
        <p className="subtitle">
          Search for a crop to know the best states and weather conditions for it.
        </p>

        {/* Search box */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter crop name (e.g Maize)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {/* Results */}
        {filteredCrop ? (
          <div className="crop-card">
            <h2>{filteredCrop.name}</h2>
            <p>
              <strong>🌍 States:</strong> {filteredCrop.states.join(", ")}
            </p>
            <p>
              <strong>☀️ Best Weather:</strong> {filteredCrop.weather}
            </p>
          </div>
        ) : (
          search && <p className="error">❌ Crop not found. Try another.</p>
        )}
      </div>
    </>
  );
};

export default CropsPage;
