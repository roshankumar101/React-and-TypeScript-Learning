import React from 'react'
import { useRef } from 'react'

const App = () => {

  // useRef will store the ref. of that element -> we can use all the properties of that element by that ref.
  const inputRef = useRef(null);
  const h2Ref = useRef(null);

  const btnClick = () => {
    // console.log(inputRef);
    inputRef.current.focus()
    inputRef.current.style.color = "red"
  }
  const h2Handler = () =>{
    h2Ref.current.style.color = "green"
  }

  return (
  <>
    <div>useRef</div>
    <input ref={inputRef} type="text" placeholder='Enter user name'/>
    <button onClick={()=> btnClick()}>Focus on input</button>

    <h2 ref={h2Ref}>H2 Tag</h2>
    <button onClick={()=> h2Handler()}>H2 Handler</button>
  </>
  )
}

export default App