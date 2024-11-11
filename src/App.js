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
     <ul>
     {destinations.map((destination) => (
          <li key={destination.id}>
          <h2>{destination.name}</h2>
          <p>Visited: {destination.visited ? "Yes" : "No"}</p>
          <p>Notes: {destination.notes}</p>
        </li>
        ))}
     </ul>
    </div>
  );
}

export default App;
