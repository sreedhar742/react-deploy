import React from 'react'

function Functionclick() {
    function clickHandler(){
        console.log("button is clicked")
    }
    
  return (
    <div>
        <button onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default Functionclick