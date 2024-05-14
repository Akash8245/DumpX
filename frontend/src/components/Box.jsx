import React from 'react'

export default function Box(prop) {
  return (
    <div className='text-white text-center border-[2px] border-white rounded-[10px] w-[70%] md:w-[50%] m-auto mt-0 mb-5 p-3'>
       <p>{prop.text}</p>
    </div>
  )
}
