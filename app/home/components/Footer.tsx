'use client';
import React, { FormEvent, useRef } from 'react';
import Link from 'next/link';
import { easeInOut, motion } from 'framer-motion';

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);

  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission logic here
    console.log(e);
  };

  const StaggeredList = () => {
    const listVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.2, // Adjust this value for more or less delay between items
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <div className='flex gap-10'>
        <motion.ul
          initial='hidden'
          whileInView='visible'
          variants={listVariants}
          className='list-none'
        >
          <motion.li variants={itemVariants} className='text-lg pb-2 text-black font-semibold'>
            SITEMAP
          </motion.li>
          <motion.li variants={itemVariants} className='text-lg font-medium'>
            <Link href='/'>Home</Link>
          </motion.li>
          <motion.li variants={itemVariants} className='text-lg font-medium'>
            <Link href='/about'>About us</Link>
          </motion.li>
          <motion.li variants={itemVariants} className='text-lg font-medium'>
            <Link href='/services'>Our Services</Link>
          </motion.li>
          <motion.li variants={itemVariants} className='text-lg font-medium'>
            <Link href='/projects'>Projects</Link>
          </motion.li>
          <motion.li variants={itemVariants} className='text-lg font-medium'>
            <Link href='/blogs'>Blogs</Link>
          </motion.li>
          <motion.li variants={itemVariants} className='text-lg font-medium'>
            <Link href='/contact-us'>Contact</Link>
          </motion.li>
        </motion.ul>

        <motion.ul
          initial='hidden'
          whileInView='visible'
          variants={listVariants}
          className='list-none'
        >
          <motion.li variants={itemVariants} className='text-xl pb-2 text-black font-semibold'>
            SOCIAL
          </motion.li>
          <motion.li variants={itemVariants} className='text-lg font-medium'>
            <a
              href='https://www.linkedin.com/company/next-codez/'
              target='_blank'
              rel="noopener noreferrer"
              className='underline'
            >
              LinkedIn
            </a>
          </motion.li>
          <motion.li variants={itemVariants} className='text-lg font-medium'>
            <a
              href='https://twitter.com/NextCodez'
              target='_blank'
              rel="noopener noreferrer"
              className='underline'
            >
              Twitter
            </a>
          </motion.li>
          <motion.li variants={itemVariants} className='text-lg font-medium'>
            <a
              href='https://www.instagram.com/nextcodez/'
              target='_blank'
              rel="noopener noreferrer"
              className='underline'
            >
              Instagram
            </a>
          </motion.li>
          <motion.li variants={itemVariants} className='text-lg font-medium'>
            <a
              href='https://www.facebook.com/nextcodezz'
              target='_blank'
              rel="noopener noreferrer"
              className='underline'
            >
              Facebook
            </a>
          </motion.li>
        </motion.ul>
      </div>
    );
  };

  return (
    <>
      <div
        className='relative h-full sm:pt-14 pt-8 bg-white/3 text-white border-t border-t-gray-700/60'
        ref={container}
      >
        <div className='sm:container px-4 mx-auto'>
          <div className='md:flex justify-between w-full'>
            <motion.div initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: easeInOut }}>
              <h1 className='md:text-2xl text-2xl font-semibold'>
                Let&lsquo;s do great work together
              </h1>
              <div className='pt-2 pb-6 md:w-99'>
                <p className='md:text-xl text-xl text-gray-400 py-4'>
                  Sign up for our newsletter*
                </p>
                <div className='hover-button relative bg-black flex justify-between items-center border-2 overflow-hidden border-black rounded-2xl text-white hover:text-black md:text-lg'>
                  <form onSubmit={handleNewsLetterData} className='relative z-2 grid grid-cols-6 w-full h-full'>
                    <input
                      type='email'
                      name='newsletter_email'
                      required // Added required attribute for better UX
                      className='border-none bg-white py-3 px-6 col-span-5'
                      placeholder='Your Email * '
                    />
                    <button
                      type='submit'
                      className='cursor-pointer w-full hover:bg-primaryColor bg-yellow-400 text-white h-full col-span-1' // Fixed typo from cols-span to col-span
                    >
                      {/* SVG Icon */}
                      <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-full h-[80%]'>
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="#000" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Staggered List Component */}
            <StaggeredList />
            
          </div>

          {/* Footer Bottom Section */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className='flex md:flex-row flex-col-reverse gap-3 justify-between py-2 mt-10'>
            <span className='font-medium'>&copy; {new Date().getFullYear()} NextCodez. All Rights Reserved.</span> {/* Updated year dynamically */}
            <a href='#' className='font-semibold'>Privacy Policy</a>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default Footer;