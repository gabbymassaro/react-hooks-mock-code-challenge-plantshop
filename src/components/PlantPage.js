import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"
import Sort from "./Sort"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")
  const [fetchTrigger, setFetchTrigger] = useState(false)

  const toggleFetchTrigger = () => setFetchTrigger(!fetchTrigger)

  const filterPlants = plants.filter((plant) => {
    if (search === "") return true

    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  const sortAndFilterPlants = filterPlants.slice().sort((a, b) => {
    if (sort === "asc") {
      return a.name.localeCompare(b.name)
    } else if (sort === "desc") {
      return b.name.localeCompare(a.name)
    } else {
      return 0
    }
  })

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
  }, [fetchTrigger])

  return (
    <main>
      <NewPlantForm onAddPlant={toggleFetchTrigger} />
      <Sort setSort={setSort} />
      <Search setSearch={setSearch} />
      <PlantList
        plants={sortAndFilterPlants}
        onDelete={toggleFetchTrigger}
        onUpdate={toggleFetchTrigger}
      />
    </main>
  )
}

export default PlantPage
