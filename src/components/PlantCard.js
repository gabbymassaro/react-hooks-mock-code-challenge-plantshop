import React from "react"
import InStock from "./InStock"

function PlantCard({ plant: { name, image, price } }) {
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <InStock />
    </li>
  )
}

export default PlantCard
