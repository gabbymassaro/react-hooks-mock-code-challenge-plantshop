import React from "react"
import InStock from "./InStock"
import Delete from "./Delete"
import UpdatePrice from "./UpdatePrice"

function PlantCard({ plant: { id, name, image, price }, onDelete, onUpdate }) {
  return (
    <li className="card">
      <Delete id={id} onDelete={onDelete} />
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <InStock />
      <UpdatePrice id={id} price={price} onUpdate={onUpdate} />
    </li>
  )
}

export default PlantCard
