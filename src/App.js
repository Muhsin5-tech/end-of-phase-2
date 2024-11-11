import React, { useState, useEffect } from "react";
import './App.css'

import destinationList from "./DestinationList";

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
     <destinationList destinations={destinations} toggleVisited={toggleVisited} />
    </div>
  );
}

export default App;