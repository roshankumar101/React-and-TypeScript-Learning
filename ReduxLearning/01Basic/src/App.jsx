import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/counterSlice'

const App = () => {

  // it dispatch the action to do the work
  const dispatch = useDispatch()

  // it showcase the current value in the UI
  const count = useSelector((state) => state.counter.value)

  const [num, setNum] = useState(0)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => {
        dispatch(increment())
      }}
      >Increment</button>

      <button onClick={() => {
        dispatch(decrement())
      }}
      >Decrement</button>

      <br />

      <button onClick={() => {
        dispatch(incrementByAmount(Number(num)))
      }}
      >Increment by Amount</button>

      <input type="number" value={num} onChange={(e) => {
        setNum(e.target.value)
      }} />
      
    </div>
  )
}

export default App