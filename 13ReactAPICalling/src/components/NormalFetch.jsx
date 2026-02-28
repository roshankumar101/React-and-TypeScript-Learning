import React from 'react'

const NormalFetch = () => {

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);

  }

  return (
    <div>
      <button onClick={getData}>Get Data with Fetch</button>
    </div>
  )
}

export default NormalFetch