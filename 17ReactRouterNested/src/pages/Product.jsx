import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-5 pt-10 underline text-xl font-semibold'>
            <Link to='/product/men'>Men</Link>
            <Link to='/product/women'>Women</Link>
            <Link to='/product/kids'>Kid</Link>
        </div>
        {/* <h1>Product Page</h1> */}
        <Outlet />
    </div>
  )
}

export default Product