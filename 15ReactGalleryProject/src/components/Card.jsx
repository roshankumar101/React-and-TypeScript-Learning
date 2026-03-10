import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
          <div className='w-44 h-40 overflow-hidden rounded-xl'>
            <img className='w-full h-full object-cover' src={props.elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg text-white'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card