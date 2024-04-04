import React, { Component } from 'react'

export default class Class_NguyenBaTruong extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:"Nguyen Ba Truong",
            class: "K22CNTT3"
        }
    }
     users = {
        name:"Nguyen Ba Truong",
        age:20
    }
    
    // Ham xu ly sk
    handlechange = (event)=>{
        this.setState({
            fullName: "le van si",
        })
    }
  render() {
    return (
      <div>
          <h2>Class component demo</h2>
           {this.users.name} - {this.users.age}

           <hr/>
           <h3>info: {this.props.info}</h3>
           <h3>time: {this.props.time}</h3>
           <hr/>
           <h3>State:
               fullName: {this.state.fullName} - 
               class: {this.state.class}
           </h3>
           <button onclick={this.handlechange}>change name</button>
      </div>
    )
  }
}
