import React, { useState } from "react";

function AddDestinationForm({ setDestinations}) {
    const [newDestination, setNewDestination] = useState({
        name: '',
        Image: '',
        notes:'',
        visited: false,
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewDestination((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newDestination.name && newDestination.image && newDestination.notes) {
            fetch("http://localhost:3001/destinations", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newDestination),
            })
            .then((response) => response.json())
            .then((data) => {
                setDestinations((prevDestination) => [...prevDestination, data])
                setNewDestination({ name: '', image: '', visited: false })

            }).catch((error) => console.error('Error Adding Destination', error))
        } else {
            alert("Please fill in all fields")
        }
    }

return(
    <form onSubmit={handleSubmit} >
        <h2>Add Neew Destination</h2>
        <div className="add-destination-form">
        <input 
            type="text"
            name="name"
            value={newDestination.name}
            onChange={handleChange}
            placeholder="Destination Name"
            required
        />
        <input 
            type="url"
            name="image"
            value={newDestination.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
        />
        <textarea className="note2"
        name="notes"
        value={newDestination.notes}
        onChange={handleChange}
        placeholder="Notes"
        required
      />
       <button type="Submit">Add destination</button>
      </div>
     
    </form>
)


}

export default AddDestinationForm