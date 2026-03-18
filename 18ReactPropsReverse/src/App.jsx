import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState('dark')

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App