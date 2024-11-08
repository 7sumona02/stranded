// components/Navbar.js
'use client'
import Image from 'next/image';
import Button from './Button';
import {easeInOut, motion} from 'framer-motion'
import LogInBtn from './LogInBtn';

const Navbar = () => {
    return (
        <div
        className='sticky inset-x-0 top-0 z-30 w-full border-b border-gray-900/20 bg-white/3 backdrop-blur-xl transition-all'>
            <motion.div 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: easeInOut }}
            className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto py-6">
                <a href="#" className="flex items-center">
                    <Image 
                        src="https://www.svgrepo.com/show/499962/music.svg" 
                        className="h-6 mr-3 sm:h-9" 
                        alt="Landwind Logo" 
                        width={24} 
                        height={24} 
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Landwind</span>
                </a>
                <div className="flex gap-4 items-center lg:order-2">
                    <div><LogInBtn /></div>
                    <Button />
                </div>
                <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="lg:flex hidden mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        {['Home', 'Company', 'Marketplace', 'Features', 'Team', 'Contact'].map((item, index) => (
                            <li key={index}>
                                <a 
                                    href="#" 
                                    className={`block ${item === 'Home' ? 'text-white' : 'text-white font-medium'} lg:bg-transparent lg:p-0 hover:text-yellow-400 transition-all font-medium`}
                                    aria-current={item === 'Home' ? 'page' : undefined}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

export default Navbar;