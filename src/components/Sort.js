import React from "react"

function Sort({ plants }) {
  return (
    <div className="sort-by">
      <strong> Sort By:</strong>
      <form>
        <select className="select-sort">
          <option value=""></option>
          {plants.map((plant) => (
            <option value="name" key={plant.id}>
              {plant.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}

export default Sort
