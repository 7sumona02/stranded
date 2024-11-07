'use client'
import React from 'react'
import StickySection from './components/StickySection'
import {motion} from 'framer-motion'
import Hero from './components/Hero'
import Vision from './components/Vision'
import ProblemSt from './components/ProblemSt'

const Page = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}} className='w-screen '>
      <Hero />
      <Vision />
      <ProblemSt />
      <StickySection />
    </motion.div>
  )
}

export default Page
