// https://cruip-tutorials.vercel.app/cards-hover-effect/
import Image from 'next/image';
import React from 'react';

function Vision() {
  return (
    <div className='h-screen'>
      <section className='grid md:grid-cols-3 gap-6 max-md:max-w-xs mx-auto pt-20 px-24'>
        <div className="group  bg-gradient-to-t from-[#242424] to-[#020202] hover:from-[#182135] hover:to-[#080808] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border ">
          <div className='relative'>
            <div className='px-6 py-5'>
              <div className='group-hover:bg-[#3e1aff] bg-white transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-black group-hover:text-white mb-1'>
                stastic
              </div>
              <span className='text-lg inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out'>
                Subscriber Reports
              </span>
              <p className='text-sm text-slate-500'>
                Building truly great products is both art and science. It&amp;s part
                intuition and part data.
              </p>
            </div>
            <div className='relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out '>
              <Image
                className='group-hover:opacity-0 transition-opacity duration-500  object-cover h-full m-0 p-0'
                src='/simplechartt.webp'
                width={350}
                height={240}
                alt='Card image 01'
              />
              <Image
                className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity  object-cover duration-300  h-full  m-0 p-0'
                src='/chartt.webp'
                width={350}
                height={240}
                alt='Card image 01 displaying on hover'
                aria-hidden='true'
              />
            </div>
          </div>
        </div>
        <div className="group  bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border ">
          <div className='relative'>
            <div className='px-6 py-5'>
            <div className='group-hover:bg-[#3e1aff] bg-white transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-black group-hover:text-white mb-1'>
                stastic
              </div>
              <span className='text-lg inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out'>
                Don&amp;t Show Your Password
              </span>
              <p className='text-sm text-slate-500'>
                If you dont hide your password then we can see it and know it
                and then can enter your account
              </p>
            </div>
            <div className='relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out'>
              <Image
                className='group-hover:opacity-0 transition-opacity duration-500'
                src='/fullverificationtwo_fpi9eo.webp'
                width={350}
                height={240}
                alt='Card image 01'
              />
              <Image
                className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                src='/verification_iwnfmj.webp'
                width={350}
                height={240}
                alt='Card image 01 displaying on hover'
                aria-hidden='true'
              />
            </div>
          </div>
        </div>
        <div className="group  bg-gradient-to-t from-[#242424] to-[#020202] hover:from-[#182135] hover:to-[#080808] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border ">
          <div className='relative'>
            <div className='px-6 py-5'>
            <div className='group-hover:bg-[#3e1aff] bg-white transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-black group-hover:text-white mb-1'>
                stastic
              </div>
              <span className='text-lg inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out'>
                Chatting Seemlessly
              </span>
              <p className='text-sm text-slate-500'>
                Building truly great products is both art and science. Its part
                intuition and part data.
              </p>
            </div>
            <div className='relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out'>
              <Image
                className='group-hover:opacity-0 transition-opacity duration-500'
                src='/chat_zinhdw.webp'
                width={350}
                height={240}
                alt='Card image 01'
              />
              <Image
                className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                src='/hide_chat_egk7h4.webp'
                width={350}
                height={240}
                alt='Card image 01 displaying on hover'
                aria-hidden='true'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vision;