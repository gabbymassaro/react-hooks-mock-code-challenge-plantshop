import React from "react"

function InStockButton({ isInStock, setIsInStock }) {
  function handleInStockClick() {
    setIsInStock((isInStock) => !isInStock)
  }
  return (
    <>
      {isInStock === true ? (
        <button className="primary" onClick={handleInStockClick}>
          In Stock
        </button>
      ) : (
        <button onClick={handleInStockClick}>Out of Stock</button>
      )}
    </>
  )
}

export default InStockButton
