import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="link-container">
        <Link to="/" className="links-input">Home</Link>
        <Link to="/add" className="links-input">Add Destination</Link>
        <Link to="/search" className="links-input">Search Destinations</Link>
        <Link to="/visited" className="links-input">Visited Destinations</Link>
      </div>
    </nav>
  );
}

export default NavBar;
