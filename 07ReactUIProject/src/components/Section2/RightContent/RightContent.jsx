import React from 'react'
import Image from './image'
import ImageInfo from './ImageInfo';

const RightContent = (props) => {
  console.log(props.info);
  return (
    <>
      <div id="right" className='w-full h-full p-8 flex flex-nowrap gap-6 overflow-x-auto'>
        {props.info.map(function (elem, idx) {
          return (
            <div className='w-1/3 h-full shrink-0 overflow-hidden rounded-4xl relative'>
              <Image img={elem.img} />
              <ImageInfo button={elem.button} idx={idx}/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RightContent