import React from "react"
import PlantCard from "./PlantCard"

function PlantList({ plants, onDelete, handleUpdate }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onDelete={onDelete}
          updatePrice={handleUpdate}
        />
      ))}
    </ul>
  )
}

export default PlantList
