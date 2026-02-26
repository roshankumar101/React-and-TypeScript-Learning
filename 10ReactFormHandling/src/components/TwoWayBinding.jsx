import React, { useState } from 'react'

const TwoWayBinding = () => {


    const [title, setTitle] = useState('')

    const textHandler = (e) =>{
        e.preventDefault();
        console.log("The text is :", title);
        
        setTitle('')
    }


  return (
    <div>
        <form onSubmit={(e) => {
            textHandler(e)
        }}>
            <input 
            type="text"
            placeholder='Enter Text'
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
            }} 
            />

            <button>Submit</button>
        </form>
    </div>
  )
}

export default TwoWayBinding