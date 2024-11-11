import React, { useState, useEffect } from "react";
import './App.css'


function App() {
  const [destinations, setDestinations] = useState([])



  useEffect(() => {
    fetch("http://localhost:3001/destinations")
    .then((response) => response.json())
    .then((data) => setDestinations(data))
    .catch((error) => console.error('Error fetching data', error))
  })
  
  
  const toggleVisited = (id) => {
    const updatedDestinations = destinations.map((destination) => {
      if (destination.id === id) {
        return{
          ...destination,
          visited: !destination.visited,
        }
      }
      return destination
    })

  
  setDestinations(updatedDestinations)

  fetch(`http://localhost:3001/destinations/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ visited: !destinations.find(d => d.id === id).visited})
  }).catch((error) => console.error('error updating visited:', error))
}
  
  return (
    <div className="App">
     <h1>Travel Bucket List App</h1>
     <div className="destination-list">
     {destinations.map((destination) => (
      <div className="destination-item" key={destination.id}>
          <h2>{destination.name}</h2>
          <img  src={destination.image} alt={destination.name} width="300" />
          
          <div className="visit-area">
          <p>Visited: {destination.visited ? "Yes" : "No"}</p>
          <button className="visit-btn" onClick={() => toggleVisited(destination.id)}>
            {destination.visited ? "Not Visited" : "Visited"}
          </button>
          </div>

          <div className="notes">
           <p>Notes: {destination.notes}</p>
          </div> 
        </div>
        ))}
    </div>
    </div>
  );
}

export default App;
