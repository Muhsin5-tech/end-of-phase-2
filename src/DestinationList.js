import React from "react";
import DestinationItem from './DestinationItem'

function destinationList({ destinations, toggleVisited }) {
    return (
    <div className="destination-list">
        {destinations.map((destination) => (
            <DestinationItem 
                key={destination.id}
                destination={destination}
                toggleVisited={toggleVisited}
            />
        ))}
    </div>
    )
}

export default destinationList