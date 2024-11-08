'use client'
import { Blocks } from 'lucide-react';
import React from 'react';
import {easeInOut, motion} from 'framer-motion'

// Define the type for the card data
interface CardData {
  title: string;
  description: string;
}

// Define the props for the Card component
interface CardProps {
  title: string;
  description: string;
}

const Benefits: React.FC = () => {
  const cardData: CardData[] = [
    { title: "Few available spots", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, odio?" },
    { title: "Limited time offer", description: "Get the best deals while they last!" },
    { title: "Exclusive access", description: "Join our community for exclusive benefits." },
    { title: "Quality assurance", description: "We guarantee the highest quality in our services." },
    { title: "Customer support", description: "24/7 support to assist you anytime." },
    { title: "Satisfaction guaranteed", description: "Your satisfaction is our priority." }
  ];

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: easeInOut }}
    className='h-screen w-screen md:px-24 px-10 flex justify-center items-center md:mb-0 mb-[15em]'>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-20 bg-white/3 border border-t-gray-700/50 border-b-gray-900/50 border-x-gray-900/50 md:px-24 px-10 py-24 rounded-[5em]'>
        {cardData.map((data, index) => (
          <Card key={index} title={data.title} description={data.description} />
        ))}
      </div>
    </motion.div>
  );
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className='space-y-2'>
      <div className='text-yellow-400'>
        <Blocks />
      </div>
      <div className='text-xl font-bold'>
        {title}
      </div>
      <div>
        {description}
      </div>
    </div>
  );
};

export default Benefits;