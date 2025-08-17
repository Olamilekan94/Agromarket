import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/marketlogo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="AgroMarket Logo" className="logo-img" />
        <h2>AgroMarket</h2>
      </div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        <li><Link to="/crops">Crops</Link></li>
        <li><Link to="/prices">Prices</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
