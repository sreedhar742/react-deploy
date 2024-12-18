import React from 'react';

const Hello=()=>{
    // return (
    //     // <div>
    //     //     <h1>HELLO FROM JSX</h1>
    //     // </div>
    //     ReactDOM.createElement('div',null,"hello from jsx")
    // )
    return(
        React.createElement('div',{},
            React.createElement('h1',{},"hii from zeelan"))
    )
}

export default Hello