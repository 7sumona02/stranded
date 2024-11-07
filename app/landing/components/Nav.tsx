import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Nav = () => {
  return (
    <div className='w-screen px-20 py-6 fixed inset-x-0 top-0 z-30 border-b border-gray-800/20 bg-white/5  backdrop-blur-md transition-all'>
      <div className='flex justify-center gap-[21em] items-center'>
        <div className='text-lg font-semibold'>
            <Link href='/'>Stranded.io</Link>
        </div>
        <div className='flex gap-10 font-medium text-md'>
            <Link href='/'><Button>Home</Button></Link>
            <Link href='/'><Button>About us</Button></Link>
            <Link href='/'><Button>About us</Button></Link>
            <Link href='/'><Button>Pricing</Button></Link>
        </div>
        <div>
            <div className='flex gap-6 text-md'>
                <button>Sign up</button>
                <button className='bg-white/5 border border-gray-700/20 py-2 px-6 rounded-full'>Login</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
