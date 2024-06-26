import React from "react"

function DeleteButton({ onDeleteItem, plant }) {
  const { id, name, image, price } = plant
  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(id))
  }
  return (
    <>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
    </>
  )
}

export default DeleteButton
