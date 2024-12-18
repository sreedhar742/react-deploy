import React,{useState} from 'react'

function Hookcounter3() {
    const[names,setnames]=useState({firstname:'',lastname:''})

  return (
    <div>
        <form>
            <input type="text" value={names.firstname} onChange={e=>setnames({...names,firstname:e.target.value})} />

            <input type="text" value={names.lastname} onChange={e=>setnames({...names,lastname:e.target.value})} />
        
            <h2>you fistname is : {names.firstname}</h2>
            <h2>you lastname is : {names.lastname}</h2>
            <h2>{JSON.stringify()}</h2>
            
        </form>
    </div>
  )
}

export default Hookcounter3