import React from 'react'
import { ArrowRight } from 'lucide-react';

const ImageInfo = (props) => {
    return (
        <div className='w-full h-full absolute top-0 left-0 p-8 flex flex-col justify-between'>
            <div>
                <h2 className='size-10 rounded-full flex items-center justify-center font-semibold text-black text-2xl bg-white'>{props.idx + 1}</h2>
            </div>

            <div className='text-white'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, id.</p>

                <button className='flex mt-4'>
                    <span className='bg-blue-500 px-3 py-1 rounded-full font-semibold'>{props.button}</span>
                    <span className='bg-blue-500 px-2 py-1 rounded-full'><ArrowRight /></span>
                </button>
            </div>
        </div>
    )
}

export default ImageInfo