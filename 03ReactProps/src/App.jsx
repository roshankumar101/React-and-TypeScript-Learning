import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card name='Roshan' age={20} />
      <Card name='Niraj' age={69} />
      <Card name='Hello' age={82} />
    </>
  )
}

export default App
