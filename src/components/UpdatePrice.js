import React, { useState } from "react"

function UpdatePrice() {
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  function handleClick() {
    setShowUpdateForm((showUpdateForm) => !showUpdateForm)
    console.log(showUpdateForm)
  }

  return (
    <>
      <button className="secondary" onClick={handleClick}>
        Update Price
      </button>
      {showUpdateForm && (
        <div className="update-price-form">
          <form>
            <label htmlFor="price">New Price</label>
            <br />
            <input className="update-price-input" type="text" id="price" />
            <button type="submit" value="Submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default UpdatePrice
