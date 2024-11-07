'use client'
import React from 'react'
import PSCard from './PSCard'
import { Space_Grotesk } from 'next/font/google';

const sm = Space_Grotesk({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const ProblemSt = () => {
  return (
    <div className='h-screen w-full flex px-24'>
        <div className='w-1/2'>
            <h1 className={`text-6xl capitalize font-semibold bg-gradient-to-b from-white to-[#3e1aff]/90 text-transparent bg-clip-text leading-[1.1em] ${sm.className}`}>
                    Problem <br /> Statement
                </h1>
        </div>
        <div className='w-1/2'>
            <div className='flex flex-col'>
                <PSCard />
                <PSCard />
            </div>
        </div>
    </div>
  )
}

export default ProblemSt
