import { Space_Grotesk } from 'next/font/google';
import Earth from './globe';
import { Spotlight } from './ui/Spotlight';

const sm = Space_Grotesk({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const Hero = () => {
  return (
    <div className='relative h-screen w-screen  flex justify-center items-center px-24'>
        {/* Spotlight components */}
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-10"
            fill="#8870C2ff"
        />
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-40"
            fill="#C9C1CEff"
        />
        <Spotlight
            className="-bottom-40 left-0 md:left-[64vw] md:-bottom-40"
            fill="#3B18DFff"
        />
        
        {/* Main content */}
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='text-white space-y-10'>
                <h1 className={`text-6xl capitalize font-semibold bg-gradient-to-b from-white to-[#3e1aff]/90 text-transparent bg-clip-text leading-[1.1em] ${sm.className}`}>
                    Protect your app <br /> against non-humans
                </h1>
                <p className='max-w-md text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus hic, earum quo iusto numquam sit! Eius, eaque in. Natus omnis
                </p>
                <button className='bg-[#3e1aff] hover:bg-[#3e1aff]/80 py-3 px-8 rounded-full font-bold'>
                    Get Started
                </button>
            </div>
        </div>

        {/* Earth component */}
        <div className="flex justify-center items-center mt-28 w-full h-full">
            <Earth />
        </div>
    </div>
  );
}

export default Hero;