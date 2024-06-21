import React, { useState } from "react"
import { v4 as uuid } from "uuid"

function NewPlantForm({ addNewPlants }) {
  const [formInput, setFormInput] = useState({
    id: uuid(),
    name: "",
    image: "",
    price: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormInput({
      ...formInput,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewPlants(formInput)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formInput.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formInput.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formInput.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
