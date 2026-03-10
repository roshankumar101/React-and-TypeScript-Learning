import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const RespectiveEffect = () => {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(100)

    useEffect(function(){ 
        console.log("useEffect for Num1...");
    }, [num1])


    useEffect(function(){
        console.log("useEffect for Num2...");
    }, [num2])

  return (
    <div>
        <br /> <br /> <br />
        <h2>Respective useEffect</h2>
        <div>
            <h3>{num1}, {num2}</h3>

            <button onMouseEnter={()=>{
                setNum1(num1+1)
            }}
            onMouseLeave={()=>{
                setNum2(num2-10)
            }}
            >Hover</button>

        </div>
    </div>
  )
}

export default RespectiveEffect