'use client';
import React, { FormEvent, useRef } from 'react';
// import * as Toast from '@radix-ui/react-toast'

// import useNewsLetter, { ClientData } from '@/lab/hooks/useNewsLetter'
import Link from 'next/link';

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  // const [Send, cilentData] = useNewsLetter()
  
  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    e.preventDefault();

    // const data: ClientData = {
    //   email: clientEmail.toString(),
    // }

    // Send(data)
  };

  return (
    <>

      <div
        className='relative h-full sm:pt-14 pt-8 bg-white/3 text-white border-t border-t-gray-700/60'
        ref={container}
      >
        <div className='sm:container  px-4 mx-auto'>
          <div className='md:flex justify-between w-full'>
            <div>
              <h1 className='md:text-2xl text-2xl font-semibold'>
                Let&lsquo;s do great work together
              </h1>
              <div className='pt-2 pb-6 md:w-99  '>
                <p className='md:text-xl text-xl text-gray-400  py-4'>
                  Sign up for our newsletter*
                </p>
                <div className=' hover-button relative bg-black flex justify-between items-center border-2 overflow-hidden  border-black rounded-2xl  text-white hover:text-black md:text-lg'>
                  <form
                    onSubmit={(e) => handleNewsLetterData(e)}
                    className='relative z-2 grid grid-cols-6  w-full h-full'
                  >
                    <input
                      type='email'
                      name='newsletter_email'
                      className='border-none bg-white  py-3 px-6  col-span-5'
                      placeholder='Your Email * '
                    />{' '}
                    <button
                      type='submit'
                      className='cursor-pointer w-full hover:bg-primaryColor bg-yellow-400 text-white h-full cols-span-1'
                    >
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        className='w-full h-[80%] '
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                          fill='#000'
                          fillRule='evenodd'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className='flex gap-10'>
              <ul>
                <li className='text-lg pb-2 text-black font-semibold'>
                  SITEMAP
                </li>
                <li className='text-lg font-medium'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='text-lg font-medium'>
                  <Link href='/about'>About us</Link>
                </li>
                <li className='text-lg font-medium'>
                  <Link href='/services'>Our Services</Link>
                </li>

                <li className='text-lg font-medium'>
                  <Link href='/projects'>Projects</Link>
                </li>
                <li className='text-lg font-medium'>
                  <Link href='/blogs'>Blogs</Link>
                </li>
                <li className='text-lg font-medium'>
                  <Link href='/contact-us'>Contact</Link>
                </li>
              </ul>
              <ul>
                <li className='text-xl pb-2 text-black font-semibold'>
                  SOCIAL
                </li>
                <li className='text-lg font-medium'>
                  <a
                    href='https://www.linkedin.com/company/next-codez/'
                    target='_blank'
                    className='underline'
                  >
                    LinkedIn
                  </a>
                </li>
                <li className='text-lg font-medium'>
                  <a
                    href='https://twitter.com/NextCodez'
                    target='_blank'
                    className='underline'
                  >
                    Twitter
                  </a>
                </li>
                <li className='text-lg font-medium'>
                  <a
                    href='https://www.instagram.com/nextcodez/'
                    target='_blank'
                    className='underline'
                  >
                    Instagram
                  </a>
                </li>
                <li className='text-lg font-medium'>
                  <a
                    href='https://www.facebook.com/nextcodezz'
                    target='_blank'
                    className='underline'
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex md:flex-row flex-col-reverse gap-3 justify-between py-2 mt-10'>
            <span className='font-medium'>
              &copy; 2023 NextCodez. All Rights Reserved.
            </span>
            <a href='#' className='font-semibold'>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
