import React, { useState } from "react"

function InStock() {
  const [inStock, setInStock] = useState(true)

  function handleStock() {
    setInStock(!inStock)
  }
  return (
    <>
      {inStock ? (
        <button className="primary" onClick={handleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </>
  )
}

export default InStock
