import React, { useMemo, useState } from 'react'

const App = () => {

  // whenever our state changes -> all the functions creates again
  const [inputValue, setInputValue] = useState('')

  // Sol:-
  // 1. keep all the functions outside the functional components, so that not creates again and again
  // 2. useMemo -> it memorize the functions only once irrespective of new creation

  const callAPI = (e) => {
    console.log("Calling API", e.target.value);
  }

  const debounce = (func, wait) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => func(...args), wait);
    }
  }

  const debounceCallAPI = useMemo(() =>
    debounce(callAPI, 400)
  ,[]);


  return (
    <div>
      <h3>Debouncing</h3>
      <input type="text" value={inputValue} placeholder='Search here...' onChange={(e) => {
        setInputValue(e.target.value);
        debounceCallAPI(e);
      }} />
    </div>
  )
}

export default App