import React, { useState, useEffect } from "react";
import './App.css'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DestinationList from "./DestinationList";
import AddDestinationForm from "./AddDestinationForm";
import SearchDestination from "./SearchDestination";
import NavBar from "./NavBar";

function App() {
  const [destinations, setDestinations] = useState([])
  const [filteredDestinations, setFilteredDestinations] = useState([])


  useEffect(() => {
    fetch("https://destinations-qe0j.onrender.com/destinations")
    .then((response) => response.json())
    .then((data) => {
      setDestinations(data)
      setFilteredDestinations(data)
    })
    .catch((error) => console.error('Error fetching data', error))
  }, [])
  
  
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
  setFilteredDestinations(updatedDestinations)

  fetch(`https://destinations-qe0j.onrender.com/destinations/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ visited: !destinations.find(d => d.id === id).visited})
  }).catch((error) => console.error('error updating visited:', error))
}
  
  return (
    <Router>
        <div className="App">
          <h1>Travel Bucket List App</h1>
          <NavBar />
          
        <Routes>

          <Route path="/" element={<DestinationList destinations={filteredDestinations} toggleVisited={toggleVisited} />} />
          <Route path="/add" element={<AddDestinationForm setDestinations={setDestinations} />} />
          <Route path="/search" element={
            <>
            <SearchDestination destinations={destinations} onSearchResults={setFilteredDestinations} />
            <DestinationList destinations={filteredDestinations} toggleVisited={toggleVisited} />
            </>
          }
         />
          <Route path="/visited" element={<DestinationList destinations={destinations.filter(dest => dest.visited)} toggleVisited={toggleVisited} />} />

        </Routes>

        </div>

    </Router>
    
  );
}

export default App;