import React, { useState } from "react";

function SearchDestination({ destinations, setFilteredDestinations }) {
    const [searchQuery, setSearchQuery] = useState("")


    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
        const filteredDestinations = destinations.filter(destination =>
            destination.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
        setFilteredDestinations(filteredDestinations)
    }

return(
    <div>
        <input 
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search"
        />
    </div>
)
}


export default SearchDestination