import React, { Component } from 'react'

class ClassCountet extends Component {
    constructor(props) {
      super(props)

      this.state = {
         count:0
      }
    }
    incrementcount=()=>{
        this.setState=({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.incrementcount}>count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCountet