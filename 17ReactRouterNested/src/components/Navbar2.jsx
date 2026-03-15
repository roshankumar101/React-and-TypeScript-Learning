import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    let navigate = useNavigate()

  return (
    <div className='py-2 flex justify-start gap-5 px-5'>
        <button 
            onClick={()=> {
                navigate('/')
            }}
            className='bg-amber-500 px-4 py-2 active:scale-95 rounded-md'>
            Back to Home Page
        </button>
        <button 
            onClick={()=> {
                navigate(-1)
            }}
            className='bg-amber-500 px-4 py-2 active:scale-95 rounded-md'>
            Prev
        </button>
        <button 
            onClick={()=> {
                navigate(+1)
            }}
            className='bg-amber-500 px-4 py-2 active:scale-95 rounded-md'>
            Next
        </button>
    </div>
  )
}

export default Navbar2