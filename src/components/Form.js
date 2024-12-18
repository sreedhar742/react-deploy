import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstname:'',
         lastname:'',
         fathername:'',
         email:''
      }
    }
    changeevent1=(event)=>{
        this.setState({
            firstname:event.target.value
        })
    }
    changeevent2=(event)=>{
      this.setState({
          lastname:event.target.value
      })
  }
   changeevent3=(event)=>{
    this.setState({
        fathername:event.target.value
    })
}
   changeevent4=(event)=>{
    this.setState({
        email:event.target.value
    })
}
  changeevent5=(event)=>{
    this.setState({

    })
  }
  changesele=(event)=>{
    this.setState({
      react:"react"
    })
  }
  render() {
    return (
      <form onSubmit={this.state.changeevent5}>
      <div>
        <label>firstname:</label>
        <input type="text" value={this.state.username} onChange={this.changeevent1}></input>
        <div>
        <label>lastname:</label>
        <input type="text" value={this.state.lastname} onChange={this.changeevent2}></input>
        </div>
        <div>
        <label>fathername:</label>
        <input type="text" value={this.state.fathername} onChange={this.changeevent3}></input>
        </div>
        <div>
        <label>email:</label>
        <input type="text" value={this.state.email} onChange={this.changeevent4}></input>
        </div>
        <div>
          <select value={this.state.changeselect}></select>
        </div>
        <div>
         <button type='submit'>Submit</button>
        </div>
      </div>
      </form>
    )
  }
}

export default Form