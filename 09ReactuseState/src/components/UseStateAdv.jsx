import React, { useState } from 'react'

const useStateAdv = () => {

    const [num, setNum] = useState([10, 20, 30])

    const btnClickedForArray = () => {
        let newNum = [...num]

        newNum[0] = 11
        setNum(newNum)
    }



    
    const [user, setUser] = useState({name: "Roshan", age: 20})

    const btnClickedForObject = () => {
        // let newUser = {...user}
        // newUser.name = "Roshani"
        // newUser.age = 19
        // setUser(newUser)

        // ShortCut
        setUser(prev => ({...prev, name:"Roshani", age:50}))
    }




    const [batch, setBatch] = useState(10)

    const btnClickedForBatchUpdate = () => {
        // if we do

        // setBatch(batch+1)
        // setBatch(batch+1)
        // setBatch(batch+1)

        // it will only inc. by 1 -> bcoz quick updated value can't detect

        // Sol:
        setBatch(prev => (prev + 1))
        setBatch(prev => (prev + 1))
        setBatch(prev => (prev + 1))
    }


  return (
    <div>
        <h3>{num}</h3>
        <button onClick={btnClickedForArray}>Click For Array</button>

        <h3>{user.name} {user.age}</h3>
        <button onClick={btnClickedForObject}>Click For Array</button>

        <h3>{batch}</h3>
        <button onClick={btnClickedForBatchUpdate}>Click for Batch Update</button>
    </div>
  )
}

export default useStateAdv