import React, { useState } from "react"

function UpdatePrice({ id, price, updatePrice }) {
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [newPrice, setNewPrice] = useState(price)

  const toggleForm = () => setShowUpdateForm(!showUpdateForm)

  const handlePriceChange = ({ target: { value } }) => setNewPrice(value)

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then(updatePrice)
      .then(toggleForm)
  }

  return (
    <>
      <button className="secondary" onClick={toggleForm}>
        Update Price
      </button>
      {showUpdateForm && (
        <div className="update-price-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="price">New Price</label>
            <br />
            <input
              className="update-price-input"
              type="number"
              id="price"
              name="price"
              step="0.01"
              value={newPrice}
              onChange={handlePriceChange}
            />
            <button type="submit" value="Submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default UpdatePrice
