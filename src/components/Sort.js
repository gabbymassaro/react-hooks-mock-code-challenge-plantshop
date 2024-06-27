import React from "react"

function Sort({ plants, setSort }) {
  function handleSort(event) {
    // setSort(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div className="sort-by">
      <strong> Sort By Price:</strong>
      <form>
        <select className="select-sort" onChange={handleSort}>
          <option value=""></option>
          {plants.map((plant) => (
            <option type="number" id="sort" value={plant.price} key={plant.id}>
              ${plant.price}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}

export default Sort
