'use client'
import {easeInOut, motion} from 'framer-motion'
import Marqueee from './Marquee'

const Banner = () => {
  return (
    <div className='h-full w-[100vw] md:px-20 px-10'>
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeInOut }}
      className='flex md:flex-row flex-col justify-between tracking-tight items-start'>
        <div className='text-2xl font-medium'>
        Partnered with global industry leaders. <span className='text-yellow-400'>You are in good hands.</span>
        </div>
        <div className='text-neutral-400'>
        Drag horizontally to see our work
        </div>
      </motion.div>
      <Marqueee />
    </div>
  )
}

export default Banner
