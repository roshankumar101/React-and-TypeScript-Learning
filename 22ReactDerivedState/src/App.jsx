import React, { useState } from 'react'

const App = () => {

  // to many hooks can slowdown performance
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState('')

  // when the state changes the variable value will be updated same as hooks
  const totalUsers = users.length
  const latsUser = users[users.length - 1]
  const unique = [...new Set(users)].length

  const handleAddUser = () => {
    setUsers([...users,newUser])
  }

  return (
    <div>
      <h2>Total Users: {totalUsers}</h2>
      <h2>Last User: {latsUser}</h2>
      <h2>Total Unique Users: {unique}</h2>

      <input type="text" placeholder='Enter User Name' onChange={(e)=>setNewUser(e.target.value)} />
      <button onClick={handleAddUser}>Add User</button>

      {
        users.map((item, idx)=>{
          return (
            <h3 key={idx}>{item}</h3>
          )
        })
      }
    </div>
  )
}

export default App