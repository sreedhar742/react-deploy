import React from "react";

// function Greet(){
//     return <h1>Hello Sreedhar</h1>
// }

export const Greet=(props)=>{
    return (
    <div>
    <h1>Hello {props.name} a.k.a {props.hero}</h1>{props.children}
    </div>
    )
}  

// export default Greet;