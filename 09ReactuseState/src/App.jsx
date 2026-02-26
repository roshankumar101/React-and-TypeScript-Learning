import React, { useState } from 'react'
import UseStateAdv from './components/useStateAdv'

const App = () => {

  const [name, setName] = useState("Roshan")    // name -> readOnly, setName -> writeOnly
  const [age, setAge] = useState(20)
  

  return (
    <div>
      <h3>Hii i am {name} and i am {age} year old</h3>
      <button onClick={() => {setName("Roshani"), setAge(19)}}>Switch User</button>


      <h4>Advance useState ["Array", "Object", "Batch Update"]</h4>
      <UseStateAdv />
    </div>
  )
}

export default App