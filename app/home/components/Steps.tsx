'use client';
import React from 'react';
import {
  TabHeader,
  TabImage,
  TabImageContainer,
  TabItem,
  TabList,
  TabsProvider,
} from './core/image-tabs';
import { motion,easeInOut } from 'framer-motion';
const tabs = [
  {
    title: 'How do UI components improve UX?',
    id: 'improve',
    description:
      'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:
      'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  },
  {
    title: 'Important of UI component.',
    id: 'important',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
    imageUrl:
      'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
  },
  {
    title: 'Is UI and UX Same?',
    id: 'same',
    description:
      '     Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
];
function Steps() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: easeInOut }}
    className='md:px-24 px-10 md:h-[60vh] h-[80vh] mb-6'>
      <div className=' w-full  h-full'>
      <div className='md:text-5xl text-3xl font-bold max-w-xl translate-y-[3em] '>
      Your design journey in
            <span className='text-yellow-400'> three effortless steps.</span>
        </div>
        <TabsProvider
          defaultValue='improve'
          className='md:grid md:grid-cols-12 items-center justify-center gap-20 md:mt-0 mt-10'
        >
          <TabList className='md:col-span-5 translate-y-[5em]'>
            {tabs.map((tab, Steps) => (
              <TabItem key={Steps} value={tab.id}>
                <TabHeader value={tab.id}>{tab.title}</TabHeader>
              </TabItem>
            ))}
          </TabList>
          <TabImageContainer className='md:col-span-7 p-4 bg-white/2 border border-gray-700/80 rounded-2xl'>
            {tabs.map((tab, Steps) => (
              <TabImage key={Steps} value={tab.id}>
                <img
                  src={tab.imageUrl}
                  alt={tab.title}
                  className='w-full h-full object-cover rounded-md'
                />
              </TabImage>
            ))}
          </TabImageContainer>
        </TabsProvider>
      </div>
    </motion.div>
  );
}

export default Steps;
