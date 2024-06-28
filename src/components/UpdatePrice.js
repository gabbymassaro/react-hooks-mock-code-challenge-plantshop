import React, { useState } from "react"

function UpdatePrice({ id, price, onUpdate }) {
  const [newPrice, setNewPrice] = useState(price)

  const handlePriceChange = ({ target: { value } }) => {
    setNewPrice(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    }).then(onUpdate)
  }

  return (
    <>
      <button>Update Price</button>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={newPrice}
          onChange={handlePriceChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default UpdatePrice
