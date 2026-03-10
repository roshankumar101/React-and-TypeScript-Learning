import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const WithDependency = () => {
    const [num, setNum] = useState(0)

    // It will run only once
    useEffect(function () {
        console.log("UseEffect is running with dependency...");
    }, [])


    return (
        <div>
            <br />
            <h2>useEffect with Dependency</h2>
            <h3>{num}</h3>
            <button onClick={() => {
                setNum(num + 1)
            }}>Click with Dependency</button>
        </div>
    )
}

export default WithDependency