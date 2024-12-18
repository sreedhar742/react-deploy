import React, { Component } from 'react'

export class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"sreedhar"
      }
      console.log("Lifecyclea constructor")
    }


    static getDerivedStateFromProps(props,state){
        console.log("lifecycle a from 2")
        return null
    }
    componentDidMount(){
        console.log("lifecycle did")
    }
  render() {
      console.log("lifecycle a")
      return <div>Lifecycle</div>
    
  }
}

export default Lifecycle