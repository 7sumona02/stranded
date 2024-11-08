'use client'
import Button from './Button'
import { Users } from './Users'
import BlockOne from './BlockBg'
import { HeroText } from './HeroText'
import {easeInOut, motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className=''>
    <BlockOne />
    <div className='w-screen md:h-[90vh] h-screen md:mt-0 mt-[10em] flex md:px-20 px-10'>
      <div className='flex items-start flex-col justify-center gap-20'>
        <div className='md:text-7xl text-4xl font-bold md:text-left text-center'>
            {/* Your all-in-one <br /> design solution under <br />
            <span className='text-yellow-400'>one subscription.</span> */}
            <HeroText />
        </div>
        <motion.div 
        initial={{x:40,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.6,ease:easeInOut}}
        className='grid md:grid-cols-2 grid-cols-1 gap-60 leading-tight tracking-tight items-end'>
            <div className='text-xl'><Users /></div>
            <div className='flex flex-col gap-8'>
                <h2 className='md:text-2xl text-xl md:text-right text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure, praesentium eum deserunt ut quae natus perspiciatis voluptates fuga numquam!</h2>
                <div><div className='flex gap-4 text-xl'>
                <div><Button /></div>
                <div><button className='px-6 py-2 border border-gray-600 rounded-2xl'>Know more</button></div>
            </div></div>
            </div>
        </motion.div>
      </div>
    </div>
    </div>
  )
}

export default Hero
