import React,{useState} from 'react'

function Hookcounter() {
    const [count,setheloo]=useState(10)

 return (
  <div>
    <button onClick={()=>setheloo(count-10)}>count{count}</button>
  </div>
 )
}

export default Hookcounter