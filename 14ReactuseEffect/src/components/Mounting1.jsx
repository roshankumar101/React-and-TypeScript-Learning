import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Mounting1 = () => {
    const [num, setNum] = useState(0)

    // It will run every time when state changes
    useEffect(function () {
        console.log("UseEffect is running1...");
    })



    return (
        <div>
            <h2>Mounting</h2>
            <h3>{num}</h3>
            <button onClick={() => {
                setNum(num + 1)
            }}>Click for Mounting</button>
        </div>
    )
}

export default Mounting1