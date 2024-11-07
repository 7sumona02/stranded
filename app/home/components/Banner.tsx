import React from 'react'
import Marqueee from './Marquee'

const Banner = () => {
  return (
    <div className='h-full w-[100vw] px-20'>
      <div className='flex justify-between tracking-tight items-start'>
        <div className='text-2xl font-medium'>
        Partnered with global industry leaders. <span className='text-yellow-400'>You are in good hands.</span>
        </div>
        <div className='text-neutral-400'>
        Drag horizontally to see our work
        </div>
      </div>
      <Marqueee />
    </div>
  )
}

export default Banner
