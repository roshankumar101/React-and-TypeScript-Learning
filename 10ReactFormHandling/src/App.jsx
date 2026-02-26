import React from 'react'
import SubmitHandler from './components/SubmitHandler'
import TwoWayBinding from './components/TwoWayBinding'

const App = () => {
  return (
    <div>
      <h4>Submit Handler</h4>
      <SubmitHandler />

      <h4>Two Way Binding</h4>
      <TwoWayBinding/>
    </div>
  )
}

export default App