import React,{useState} from 'react'

function Hookcounter2() {
    const number=0
    const [count,setCount]=useState(number)

    const incrementfive=()=>{
        for (var i =0;i<5;i++){
            setCount(car=>car+1)
        }
    }
  return (
    <div>
      
        count :{count}<br></br>
        <button onClick={()=>setCount(number)}>Reset</button><br></br>
        <button onClick={()=>setCount(count=>count+1)}>increment</button><br></br>
        <button onClick={()=>setCount(count=>count-1)}>decrement</button><br></br>
        <button onClick={()=>incrementfive()}>increment 5</button>
    </div>
  )
}

export default Hookcounter2