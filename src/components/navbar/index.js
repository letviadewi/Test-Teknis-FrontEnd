import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import "./navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          MovieDB
        </Link>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <CiMenuFries color="white" size={30} />
        </div>
        <ul className={`navbar-links ${isActive ? "active" : ""}`}>
          <li>
            <Link to="/" className="navbar-link">
              Now Playing
            </Link>
          </li>
          <li>
            <Link to="/popular" className="navbar-link">
              Popular
            </Link>
          </li>
          <li>
            <Link to="/top_rated" className="navbar-link">
              Top Rated
            </Link>
          </li>
          <li>
            <Link to="/upcoming" className="navbar-link">
              Upcoming
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
