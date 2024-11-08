'use client'
import {easeInOut, motion} from 'framer-motion'

const About = () => {
  return (
    <div className='md:px-20 px-10 mb-24'>
    <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: easeInOut }}
    className='bg-white/3 border border-t-gray-700/50 border-b-gray-900/50 border-x-gray-900/50 rounded-[5em] flex items-center justify-center md:px-40 px-6 py-24'>
      <div
      className='max-w-lg md:text-4xl text-xl md:text-left text-center font-medium'>
      Ever wondered how some startups capture all the spotlight while others are left behind? We’ll let you in on a little secret -  it’s all about design. That’s where we come in.
<br /> <br /><br />
We help founders like you build innovative digital products that have high conversion rates, retain customers and attract investors. 
<br /><br /><br />
Do you want your product to be the next big thing in the digital world?
<br /><br /><br />
<span className='text-yellow-400'>Welcome to Artone.</span>
      </div>
    </motion.div>
    </div>
  )
}

export default About
