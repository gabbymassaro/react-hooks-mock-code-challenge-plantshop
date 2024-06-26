import React, { useRef } from "react"

function UpdatePriceButton({
  plant,
  showForm,
  setShowForm,
  newPrice,
  setNewPrice,
  plants,
  setPlants,
}) {
  const { id } = plant
  const formRef = useRef(null)

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
  return (
    <>
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
    </>
  )
}

export default UpdatePriceButton
