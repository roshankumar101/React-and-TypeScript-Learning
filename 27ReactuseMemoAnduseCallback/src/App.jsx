import React, { useCallback, useMemo, useState } from 'react'
import Sum from './Sum'
import Post from './Post'

// When we update state, all the child element got re-render -> <Sum /> got re-render again -> all the function of Sum got re-render again -> memory and time wastage
// Sol:- When we use React.memo on the Sum -> then it would not re-render until the props changes

const App = () => {
  const [counter, setCounter] = useState(0)
  const [number, setNumber] = useState(1000)

  console.log("App Render");



  // useMemo will remember the value -> it will not re-render the function again until dependencies changes
  let prime = useMemo(()=>{
    console.log("Prime function Called");

    let total = 0;
    
    if(number > 0) total+1;

    for(let i=3; i<=number; i++){
      total++;
      for(let j=2; j<i; j++){
        if(i%j == 0){
          total--;
          break;
        }
      }
    }

    return total;
  }, [number])


  // useCallback will remember the function -> it will not re-render the function again until dependencies changes
  const handleClick = useCallback(()=>{
    console.log("Handle click", counter);
  },[counter])


  // whenever the counter update -> the component re-render -> new object created and compared with old -> compare with reference
  // Sol:-
  const obj = useMemo(()=>{
    return {name:"Roshan", age:22};
  },[])





  
  return (
    <div>
      <h2>Count: {counter}</h2>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>

      <h2>Number: {number}</h2>
      <button onClick={()=>setNumber(number+100)}>Inc Number</button>

      <h2>Prime number: {prime}</h2>
      <button onClick={handleClick}>useCallback click</button>
      <hr />
      <Sum number={number} />
      <hr />
      {/* <Post value={{name:"Roshan", age:22}} /> */}
      <Post value={obj} />
    </div>
  )
}

export default App