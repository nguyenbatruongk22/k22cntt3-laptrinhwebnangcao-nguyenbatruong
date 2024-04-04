import React from 'react'

export default function Func_JSX_NguyenBaTruong(props) {
    const users = {
        name:"Nguyen Ba Truong",
        age:20
    }
  return (
    <div>
        <h2>Function Component Demo</h2>
        <h3>
            Welcome to ,{users.name} - {users.age}
        </h3>
        <hr/>
        <h3>props:
            <br/> fullName: {props.fullName}
            <br/> age: {props.age}
        </h3> 
        
    </div>
  )
}
