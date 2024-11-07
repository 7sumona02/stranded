import React from 'react'
import Button from './Button'
import { Users } from './Users'
import BlockOne from './BlockBg'

const Hero = () => {
  return (
    <div className=''>
    <BlockOne />
    <div className='w-screen h-[90vh] flex px-20 '>
      <div className='flex items-start flex-col justify-center gap-20'>
        <div className='text-7xl font-bold'>
            Your all-in-one <br /> design solution under <br />
            <span className='text-yellow-400'>one subscription.</span>
        </div>
        <div className='grid grid-cols-2 gap-60 leading-tight tracking-tight items-end'>
            <div className='text-xl'><Users /></div>
            <div className='flex flex-col gap-8'>
                <h2 className='text-2xl text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure, praesentium eum deserunt ut quae natus perspiciatis voluptates fuga numquam!</h2>
                <div><div className='flex gap-4 text-xl'>
                <div><Button></Button></div>
                <div><button className='px-6 py-2 border border-gray-600 rounded-2xl'>2 spots available</button></div>
            </div></div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
