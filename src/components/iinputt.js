import React,{useEffect,useState} from 'react'

function Lit(){
    const [names,setnames]=useState({firsname:'',lastname:''})
    const handler=e=>{
        console.log(names)
    }
    return (
        <div><form onSubmit={handler}>
            <input type="text" value={names.firsname} onChange={e=>setnames({...names,firsname:e.target.value})} />
            <input type="text" value={names.lastname} onChange={e=>setnames({...names,lastname:e.target.value})} />
            <h2>First Name is : {names.firsname}</h2>
            <h2>Last Name is  : {names.lastname}</h2>
            <button type="submit">submit</button>
            </form>
        </div>
    )
}


export default Lit