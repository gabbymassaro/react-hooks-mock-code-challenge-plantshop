import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

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

  function handleSearchInput(input) {
    setSearch(input)
  }

  const onSearchForPlants = plants.filter((plant) => {
    if (search === "") return true

    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm addNewPlants={onNewPlantSubmit} />
      <Search plants={plants} search={search} onSearch={handleSearchInput} />
      <PlantList plants={plants} onSearchForPlants={onSearchForPlants} />
    </main>
  )
}

export default PlantPage
