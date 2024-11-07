import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
  } from './core/carousel';
  
  export function Carousell() {
    return (
      <div className='relative w-full max-w-6xl'>
        <Carousel>
          <CarouselContent className='flex gap-4'>
            <CarouselItem className='basis-1/2 flex items-center justify-center'> {/* Centering with flex */}
              <img src='/b1.svg' className='object-contain' alt="Image 1" /> {/* Use object-contain for proper scaling */}
            </CarouselItem>
            <CarouselItem className='basis-1/2 flex items-center justify-center'> {/* Centering with flex */}
            <img src='/b1.svg' className='object-contain' alt="Image 1" /> 
            </CarouselItem>
            <CarouselItem className='basis-1/2 flex items-center justify-center'> {/* Centering with flex */}
              <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
                3
              </div>
            </CarouselItem>
            <CarouselItem className='basis-1/2 flex items-center justify-center'> {/* Centering with flex */}
              <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
                4
              </div>
            </CarouselItem>
            <CarouselItem className='basis-1/2 flex items-center justify-center'> {/* Centering with flex */}
              <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
                5
              </div>
            </CarouselItem>
            <CarouselItem className='basis-1/2 flex items-center justify-center'> {/* Centering with flex */}
              <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
                6
              </div>
            </CarouselItem>
            <CarouselItem className='basis-1/2 flex items-center justify-center'> {/* Centering with flex */}
              <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
                7
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNavigation />
        </Carousel>
      </div>
    );
  }