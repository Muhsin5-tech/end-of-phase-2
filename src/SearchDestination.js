import React, { useState } from "react";

function SearchDestination({ destinations, onSearchResults }) {
    const [searchQuery, setSearchQuery] = useState("")


    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
        const filteredDestinations = destinations.filter(destination =>
            destination.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
        onSearchResults(filteredDestinations)
    }

return(
    <div className="search-container">
        <input 
        type="text"
        className="search-input"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search"
        />
    </div>
)
}


export default SearchDestination