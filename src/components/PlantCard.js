import React from "react"
import InStock from "./InStock"

function PlantCard({ plant }) {
  const { id, name, image, price } = plant

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <InStock id={id} />
    </li>
  )
}

export default PlantCard
