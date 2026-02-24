import React from 'react'
import LeftContent from './LeftContent/LeftContent'
import RightContent from './RightContent/RightContent'

const Section2 = (props) => {
  return (
    <div  className='w-full h-screen'>
        <div className='w-full h-[80%] flex gap-6 px-10'>
            <div className='w-1/3'>
                <LeftContent />
            </div>
            <div className='w-2/3'>
                <RightContent info={props.info}/>
            </div>
        </div>
    </div>
  )
}

export default Section2