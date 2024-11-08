'use client'
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from './core/carousel';
import {easeInOut, motion} from 'framer-motion'

export function Carousell() {
  return (
      <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: easeInOut }}
      className='relative w-full max-w-6xl md:mt-0 mt-[2em] md:px-0 px-10'>
          <Carousel>
              <CarouselContent className='flex gap-4'>
                  {/* Each CarouselItem will take full width on small screens */}
                  <CarouselItem className='basis-full md:basis-1/2 flex items-center justify-center'> 
                      <img src='/b1.svg' className='object-contain' alt="Image 1" />
                  </CarouselItem>
                  <CarouselItem className='basis-full md:basis-1/2 flex items-center justify-center'> 
                      <img src='/b1.svg' className='object-contain' alt="Image 1" /> 
                  </CarouselItem>
                  <CarouselItem className='basis-full md:basis-1/2 flex items-center justify-center'> 
                      <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
                          3
                      </div>
                  </CarouselItem>
                  <CarouselItem className='basis-full md:basis-1/2 flex items-center justify-center'> 
                      <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
                          4
                      </div>
                  </CarouselItem>
                  <CarouselItem className='basis-full md:basis-1/2 flex items-center justify-center'> 
                      <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
                          5
                      </div>
                  </CarouselItem>
                  <CarouselItem className='basis-full md:basis-1/2 flex items-center justify-center'> 
                      <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
                          6
                      </div>
                  </CarouselItem>
                  <CarouselItem className='basis-full md:basis-1/2 flex items-center justify-center'> 
                      <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
                          7
                      </div>
                  </CarouselItem>
              </CarouselContent>
              <CarouselNavigation />
          </Carousel>
      </motion.div>
  );
}