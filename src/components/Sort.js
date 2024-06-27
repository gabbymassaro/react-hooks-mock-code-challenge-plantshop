import React from "react"

function Sort({ setSort }) {
  function handleSort(event) {
    setSort(event.target.value)
  }

  return (
    <div className="sort-by">
      <strong> Sort By Name:</strong>
      <form>
        <select className="select-sort" onChange={handleSort}>
          <option value=""></option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </form>
    </div>
  )
}

export default Sort
