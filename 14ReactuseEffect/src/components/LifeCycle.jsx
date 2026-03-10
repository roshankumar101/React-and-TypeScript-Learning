import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
    const [num] = useState(0)

    useEffect(()=>{
        console.log("mount phase");
    }, [])

    useEffect(()=>{
        console.log("update phase");
    }, [num])

    useEffect(()=>{
        return () => {
            console.log("unmount phase");
        }
    }, [])

  return (
    <div>Life Cycle Component</div>
  )
}

export default LifeCycle