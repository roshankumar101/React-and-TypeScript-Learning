import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center px-10 py-4 font-bold border rounded-md'>
        <h2>Brand</h2>
        <div className='flex gap-5 font-semibold underline'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/courses'>Courses</Link>
          <Link to='/product'>Product</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar