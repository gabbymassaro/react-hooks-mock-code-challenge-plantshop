import React, { useState } from "react"
import DeleteButton from "./DeleteButton"
import InStockButton from "./InStockButton"
import UpdatePriceButton from "./UpdatePriceButton"

function PlantCard({ plants, setPlants, plant, onDeleteItem }) {
  const [isInStock, setIsInStock] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [newPrice, setNewPrice] = useState(0)

  return (
    <>
      <li className="card">
        <div className="card-container">
          <DeleteButton onDeleteItem={onDeleteItem} plant={plant} />
          <InStockButton isInStock={isInStock} setIsInStock={setIsInStock} />
          <UpdatePriceButton
            plant={plant}
            showForm={showForm}
            setShowForm={setShowForm}
            newPrice={newPrice}
            setNewPrice={setNewPrice}
            plants={plants}
            setPlants={setPlants}
          />
        </div>
      </li>
    </>
  )
}

export default PlantCard
