import React, { useRef, useState } from "react"
import DeleteButton from "./DeleteButton"

function PlantCard({ plants, setPlants, plant, onDeleteItem }) {
  const { id, name, image, price } = plant

  const [isInStock, setIsInStock] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [newPrice, setNewPrice] = useState(0)
  const formRef = useRef(null)

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
      .then((data) => {
        updatePrice(data)
        if (formRef.current) {
          formRef.current.reset()
        }
        setShowForm(false)
      })
  }

  return (
    <>
      <li className="card">
        <div className="card-container">
          <DeleteButton onDeleteItem={onDeleteItem} plant={plant} />
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
          {showForm && (
            <div className="update-price-form">
              <form onSubmit={onSubmitPrice} ref={formRef}>
                <label htmlFor="price">New Price</label>
                <br />
                <input
                  className="update-price-input"
                  type="text"
                  id="price"
                  onChange={handleChangePrice}
                />
                <button type="submit" value="Submit">
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </li>
    </>
  )
}

export default PlantCard
