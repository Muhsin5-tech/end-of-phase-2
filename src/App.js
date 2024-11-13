import React, { useState, useEffect } from "react";
import './App.css'

import DestinationList from "./DestinationList";
import AddDestinationForm from "./AddDestinationForm";
import SearchDestination from "./SearchDestination";
import NavBar from "./NavBar";

function App() {
  const [destinations, setDestinations] = useState([])
  const [filteredDestinations, setFilteredDestinations] = useState([])
  const [activePage, setActivePage] = useState('home')



  useEffect(() => {
    fetch("http://localhost:3001/destinations")
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
      <NavBar setActivePage={setActivePage} />
      
     

      {activePage === 'home' && (
        <>
        <DestinationList destinations={filteredDestinations} toggleVisited={toggleVisited} />
        </>
      )}
     
     {activePage === 'add' && (
      <AddDestinationForm setDestinations={setDestinations}/>
     )}
     

     {activePage === 'search' && (
      <>
      <SearchDestination destinations={destinations} onSearchResults={setFilteredDestinations} />
      <DestinationList destinations={filteredDestinations} toggleVisited={toggleVisited} />
      </>
     )}

      {activePage === 'visited' && (
        <DestinationList 
          destinations={destinations.filter(dest => dest.visited)} 
          toggleVisited={toggleVisited} 
        />
      )}
     
    </div>
  );
}

export default App;