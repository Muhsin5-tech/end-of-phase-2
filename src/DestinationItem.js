import React from "react";

function DestinationItem({ destination, toggleVisited }) {
    return (
        <div className="destination-item">
            <h2>{destination.name}</h2>
            <img src={destination.image} alt={destination.name} width="300" />

        <div className="visit-area">
            <p>Visited: {destination.visited ? 'Yes' : 'No'}</p>
            <button className="visit-btn" onClick={() => toggleVisited(destination.id)}>
                {destination.visited ? 'Not Visited' : 'Visited'}
            </button>
        </div>

        <div className="notes">
            <p>Notes: {destination.notes}</p>
        </div>
        </div>
    )
}


export default DestinationItem