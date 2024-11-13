import React from "react";

function NavBar({ setActivePage }) {
  return (
    <nav className="navbar">
      <div className="link-container">
        <button className="links-input" onClick={() => setActivePage('home')}>Home</button>
        <button className="links-input" onClick={() => setActivePage('add')}>Add Destination</button>
        <button className="links-input" onClick={() => setActivePage('search')}>Search Destinations</button>
        <button className="links-input" onClick={() => setActivePage('visited')}>Visited Destinations</button>
      </div>
    </nav>
  );
}

export default NavBar;
