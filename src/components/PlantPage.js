import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
  }, [])

  function onNewPlantSubmit(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      body: JSON.stringify(newPlant),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPlants([...plants, data])
      })
  }

  return (
    <main>
      <NewPlantForm addNewPlants={onNewPlantSubmit} />
      <Search />
      <PlantList plants={plants} />
    </main>
  )
}

export default PlantPage
