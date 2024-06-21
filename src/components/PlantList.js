import React from "react"
import PlantCard from "./PlantCard"

function PlantList({ plants, onSearchForPlants }) {
  console.log(onSearchForPlants)

  const renderPlantList =
    onSearchForPlants.length > 0 ? onSearchForPlants : plants
  return (
    <ul className="cards">
      {renderPlantList.map((plant) => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
        />
      ))}
    </ul>
  )
}

export default PlantList
