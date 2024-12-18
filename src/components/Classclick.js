import React, { Component } from 'react'

class Classclick extends Component {
    classHandler() {
        console.log("clicked")    
    }
  render() {
    return (
      <div>
        <button onClick={this.classHandler}>Click this</button>
      </div>
    )
  }
}

export default Classclick