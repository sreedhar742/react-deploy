import React from "react"
let names=React.createElement('h1',{},"hii Sreedhar")
let forms=React.createElement('div',{},
    [React.createElement('label',{},"enter your name"),
        React.createElement('br'),
        React.createElement('input'),
        React.createElement('br'),
    React.createElement('label',{},"enter you father name"),React.createElement('br'),React.createElement('input')])

function Grret(){
    return forms
}

export default Grret