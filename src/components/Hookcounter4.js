import React,{useState,useEffect} from 'react'

function Hookcounter4() {
    const[count,setmethod]=useState({one:0,values:"sreedhar"})
    useEffect(()=>{
        console.log({count})
    },[count.one])
  return (
    <div>
        <p>{count.values}</p>
        <p>{count.one}</p>
        <button onClick={()=>setmethod({...count,one:count.one+1})}>count</button>
    </div>
  )
}

export default Hookcounter4