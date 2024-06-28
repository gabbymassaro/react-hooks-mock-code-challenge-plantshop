import React, { useState } from "react"

function InStock() {
  const [isInStock, setIsInStock] = useState(true)

  function handleOnClick() {
    setIsInStock((isInStock) => !isInStock)
  }

  return (
    <>
      {isInStock ? (
        <button className="primary" onClick={handleOnClick}>
          In Stock
        </button>
      ) : (
        <button onClick={handleOnClick}>Out of Stock</button>
      )}
    </>
  )
}

export default InStock
