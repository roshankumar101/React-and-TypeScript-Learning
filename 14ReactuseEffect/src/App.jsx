import React, { useState } from 'react'
import Mounting1 from './components/mounting1'
import WithDependency from './components/WithDependency'
import RespectiveEffect from './components/RespectiveEffect'
import LifeCycle from './components/LifeCycle'

const App = () => {

  const [display, setDisplay] = useState(true)

  return (
    <div>
      <Mounting1 />
      <WithDependency />
      <RespectiveEffect />
      <button onClick={()=> setDisplay(!display)}>Toggle</button>
      {
        display && <LifeCycle />
      }
    </div>
  )
}

export default App