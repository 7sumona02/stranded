import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

const PSCard: React.FC = () => {
  const boxWrapper = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });
  const [overlayColor, setOverlayColor] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Update mouse position on mouse move
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    // Attach the event listener to window
    window.addEventListener('mousemove', updateMousePosition as EventListener);

    return () => {
      // Cleanup on unmount
      window.removeEventListener('mousemove', updateMousePosition as EventListener);
    };
  }, []);

  // Handle mouse move within the card
  const handleMouseMove = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (boxWrapper.current) {
      const { left, top } = boxWrapper.current.getBoundingClientRect();
      const x = ev.clientX - left;
      const y = ev.clientY - top;
      setOverlayColor({ x, y });
    }
  };

  return (
    <div className='relative bg-black p-8 rounded-md'>
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={boxWrapper}
        className={cn(
          'group relative rounded-lg p-[2px] bg-[#eeeeee15] overflow-hidden w-fit mx-auto'
        )}
      >
        {/* Cursor Flow Gradient */}
        {isHovered && (
          <div
            className='pointer-events-none absolute opacity-0 z-50 rounded-xl w-full h-full group-hover:opacity-100 transition duration-300'
            style={{
              background: `
                radial-gradient(
                  250px circle at ${overlayColor.x}px ${overlayColor.y}px,
                  rgba(255, 255, 255, 0.068),
                  transparent 80%
                )
              `,
            }}
          />
        )}

        {/* Hover Spotlight */}
        <div
          className='absolute opacity-0 group-hover:opacity-100 z-10 inset-0 bg-fixed rounded-lg'
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #ffffff76 0%, transparent 20%, transparent) fixed`,
          }}
        ></div>
        
        <div className="relative text-center z-10 px-8 py-6 rounded-lg w-fit bg-[url('/sub-grid.png')] bg-cover bg-black h-full mx-auto">
          <>
            <Image
              src={'/statistic.png'}
              alt='grid'
              width={600}
              height={600}
              className='w-fit mx-auto'
            />
            <h1 className='text-3xl pt-6 font-medium tracking-tight text-white'>
              Subscriber Growth
            </h1>
            <p className='pt-2 text-gray-300 capitalize'>
              Experience a significant boost in your subscriber <br /> count,
              achieving 3x growth.
            </p>
          </>
        </div>
      </div>
    </div>
  );
};

export default PSCard;