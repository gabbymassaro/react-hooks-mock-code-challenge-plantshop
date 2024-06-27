import React from "react"

function Delete({ id, onDelete }) {
  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDelete(id))
  }
  return (
    <>
      <button onClick={handleDelete}>X</button>
    </>
  )
}

export default Delete
