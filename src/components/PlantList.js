import React from "react"
import PlantCard from "./PlantCard"

function PlantList({ plants, setPlants, onSearchForPlants, onHandleDelete }) {
  const renderPlantList =
    onSearchForPlants.length > 0 ? onSearchForPlants : plants
  return (
    <ul className="cards">
      {renderPlantList.map((plant) => (
        <PlantCard
          key={plant.id}
          id={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
          setPlants={setPlants}
          plants={plants}
          onDeleteItem={onHandleDelete}
        />
      ))}
    </ul>
  )
}

export default PlantList
