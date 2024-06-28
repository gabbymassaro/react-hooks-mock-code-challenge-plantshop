import React from "react"

function Delete({ id, onDelete }) {
  const handleDelete = (event) => {
    event.preventDefault()

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    }).then(onDelete(id))
  }

  return <button onClick={handleDelete}>X</button>
}

export default Delete
