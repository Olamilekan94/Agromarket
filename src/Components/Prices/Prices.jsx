import React, { useState } from "react";
import "./Prices.css";
import Navbar from "../Navbar/Navbar";

import { FaChartLine } from "react-icons/fa";

const Prices = () => {
  const pricesData = [
    { commodity: "Maize", price: 20000, location: "Kaduna" },
    { commodity: "Rice", price: 32000, location: "Kano" },
    { commodity: "Sorghum", price: 18000, location: "Minna" },
    { commodity: "Cassava", price: 12000, location: "Ibadan" },
    { commodity: "Yam", price: 25000, location: "Enugu" },
    { commodity: "Wheat", price: 30000, location: "Maiduguri" },
  ];

  const [selectedCommodity, setSelectedCommodity] = useState("");

  const handleFilterChange = (e) => {
    setSelectedCommodity(e.target.value);
  };

  const filteredData = selectedCommodity
    ? pricesData.filter(
        (item) => item.commodity.toLowerCase() === selectedCommodity.toLowerCase()
      )
    : pricesData;

  return (
    <>
    <Navbar/>
    <div className="prices-container">
      <header className="prices-header">
        <div className="title">
          <FaChartLine className="title-icon" />
          <h1>Market Prices</h1>
        </div>
        <select
          className="filter-dropdown"
          value={selectedCommodity}
          onChange={handleFilterChange}
        >
          <option value="">Filter by commodity</option>
          {pricesData.map((item, index) => (
            <option key={index} value={item.commodity}>
              {item.commodity}
            </option>
          ))}
        </select>
      </header>

      <table className="prices-table">
        <thead>
          <tr>
            <th>Commodity</th>
            <th>Price (₦/ton)</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.commodity}</td>
              <td>₦{item.price.toLocaleString()}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Prices;
