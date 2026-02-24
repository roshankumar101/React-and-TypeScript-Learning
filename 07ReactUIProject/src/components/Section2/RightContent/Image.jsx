import React from 'react'

const image = (props) => {
    return (
        <div className='h-full'>
            <img className='w-full h-full object-cover' src={props.img} alt="" />
        </div>
    )
}

export default image