import React from "react"
import InStock from "./InStock"
import Delete from "./Delete"
import UpdatePrice from "./UpdatePrice"

function PlantCard({ plant, onDelete }) {
  const { id, name, image, price } = plant

  return (
    <li className="card">
      <Delete id={id} onDelete={onDelete} />
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <InStock id={id} />
      <UpdatePrice />
    </li>
  )
}

export default PlantCard
