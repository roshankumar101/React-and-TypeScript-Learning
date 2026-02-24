import React from 'react'

const navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-5'>
        <div className='w-fit px-4 py-1 bg-black text-white font-semibold rounded-full uppercase'>Target Audience</div>
        <div className='w-fit px-4 py-1 bg-gray-200 rounded-full font-semibold uppercase'>digital banking platform</div>
    </div>
  )
}

export default navbar