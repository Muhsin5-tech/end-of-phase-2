import React, { useState, useEffect } from "react";


function App() {
  const [destinations, setDestinations] = useState([])



  useEffect(() => {
    fetch("http://localhost:3001/destinations")
    .then((response) => response.json())
    .then((data) => setDestinations(data))
    .catch((error) => console.error('Error fetching data', error))
  })
  
  
  
  
  
  return (
    <div className="App">
     <h1>Travel Bucket List App</h1>
     <div className="destination-list">
     {destinations.map((destination) => (
      <div className="destination-item" key={destination.id}>
          <h2>{destination.name}</h2>
          <img  src={destination.image} alt={destination.name} width="300" />
          <p>Visited: {destination.visited ? "Yes" : "No"}</p>
          <p>Notes: {destination.notes}</p>
        </div>
        ))}
    </div>
    </div>
  );
}

export default App;
