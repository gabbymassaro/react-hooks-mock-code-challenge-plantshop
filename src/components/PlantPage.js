import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"
import Sort from "./Sort"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  const [fetchTrigger, setFetchTrigger] = useState(false)

  const toggleFetchTrigger = () => setFetchTrigger(!fetchTrigger)

  const onSearchForPlants = plants.filter((plant) => {
    if (search === "") return true

    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
  }, [fetchTrigger])

  return (
    <main>
      <NewPlantForm onAddPlant={toggleFetchTrigger} />
      <Search setSearch={setSearch} />
      <Sort plants={plants} />
      <PlantList
        plants={onSearchForPlants}
        onDelete={toggleFetchTrigger}
        handleUpdate={toggleFetchTrigger}
      />
    </main>
  )
}

export default PlantPage
