import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <h2>Brand</h2>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About us</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar