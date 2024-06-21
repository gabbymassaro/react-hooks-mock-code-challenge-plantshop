import React, { useState } from "react"

function PlantCard({ plants, setPlants, id, name, image, price }) {
  const [isInStock, setIsInStock] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [newPrice, setNewPrice] = useState(0)

  function handleInStockClick() {
    setIsInStock((isInStock) => !isInStock)
  }

  const showUpdatePriceForm = () => {
    setShowForm(!showForm)
  }

  function handleChangePrice(event) {
    setNewPrice(event.target.value)
  }

  function updatePrice(data) {
    let updatedPlants = plants.map((plant) =>
      plant.id === data.id ? { ...plant, price: data.price } : plant
    )
    setPlants(updatedPlants)
  }

  function onSubmitPrice(event) {
    event.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: newPrice,
      }),
    })
      .then((response) => response.json())
      .then((data) => updatePrice(data))
  }

  return (
    <>
      <li className="card">
        <div className="card-container">
          <button>X</button>
          <img src={image} alt={name} />
          <h4>{name}</h4>
          <p>Price: {price}</p>
          {isInStock === true ? (
            <button className="primary" onClick={handleInStockClick}>
              In Stock
            </button>
          ) : (
            <button onClick={handleInStockClick}>Out of Stock</button>
          )}
          <button className="secondary" onClick={showUpdatePriceForm}>
            Update Price
          </button>
        </div>
      </li>
      {showForm && (
        <div className="form-container">
          <form onSubmit={onSubmitPrice}>
            <label htmlFor="price">New Price</label>
            <br />
            <input type="text" id="price" onChange={handleChangePrice} />
            <button type="submit" value="Submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default PlantCard
