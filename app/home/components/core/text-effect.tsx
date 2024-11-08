'use client';
import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  motion,
  TargetAndTransition,
  Variants,
} from 'framer-motion';
import React from 'react';

type PresetType = 'blur' | 'shake' | 'scale' | 'fade' | 'slide';

type TextEffectProps = {
  children: React.ReactNode; // Accepts any React node
  per?: 'word' | 'char' | 'line';
  as?: keyof React.JSX.IntrinsicElements;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: PresetType;
  delay?: number;
  trigger?: boolean;
  onAnimationComplete?: () => void;
  segmentWrapperClassName?: string;
};

const defaultStaggerTimes: Record<'char' | 'word' | 'line', number> = {
  char: 0.03,
  word: 0.05,
  line: 0.1,
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: defaultStaggerTimes.line,
    },
  },
  exit: {
    transition: { staggerChildren: defaultStaggerTimes.line, staggerDirection: -1 },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// Preset variants for animations
const presetVariants: Record<PresetType, { container: Variants; item: Variants }> = {
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(12px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, filter: 'blur(12px)' },
    },
  },
  shake: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 0 },
      visible: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.5 } },
      exit: { x: 0 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0 },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }, // Adjusted exit animation
    },
  },
};

// Animation component for individual segments
const AnimationComponent = React.memo(({
   segment,
   variants,
   per,
   segmentWrapperClassName
}: {
   segment:string;
   variants : Variants;
   per : 'line' | 'word' | 'char';
   segmentWrapperClassName? : string;
}) => {

   const content =
     per === 'line' ? (
       <motion.span variants={variants} className='block'>
         {segment}
       </motion.span>
     ) : per === 'word' ? (
       <motion.span
         aria-hidden='true'
         variants={variants}
         className='inline-block whitespace-pre'
       >
         {segment}
       </motion.span>
     ) : (
       <motion.span className='inline-block whitespace-pre'>
         {segment.split('').map((char, charIndex) => (
           <motion.span
             key={`char-${charIndex}`}
             aria-hidden='true'
             variants={variants}
             className='inline-block whitespace-pre'
           >
             {char}
           </motion.span>
         ))}
       </motion.span>
     );

   if (!segmentWrapperClassName) return content;

   const defaultWrapperClassName = per === 'line' ? 'block' : 'inline-block';

   return (
     <span className={cn(defaultWrapperClassName, segmentWrapperClassName)}>
       {content}
     </span>
   );
});

AnimationComponent.displayName = 'AnimationComponent';

// Main TextEffect component
export const TextEffect = React.memo(({
   children,
   per = 'word',
   as = 'p',
   variants,
   className,
   preset,
   delay = 0,
   trigger = true,
   onAnimationComplete,
   segmentWrapperClassName,
}: TextEffectProps) => {

   let segments = Array.isArray(children) ? children : [children]; // Handle array of children

   // Ensure children is treated as a string for splitting
   if (typeof children === "string") {
     if (per === 'line') {
       segments = (children as string).split('\n');
     } else if (per === 'word') {
       segments = (children as string).split(/(\s+)/);
     } else if (per === 'char') {
       segments = (children as string).split('');
     }
   } else if (React.isValidElement(children)) {
     // If it's a single React element, wrap it in an array
     segments = [React.Children.toArray(children)];
   }

   const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

   const selectedVariants = preset
     ? presetVariants[preset]
     : { container: defaultContainerVariants, item: defaultItemVariants };

   const containerVariants = variants?.container || selectedVariants.container;
   const itemVariants = variants?.item || selectedVariants.item;

   const ariaLabel = per === 'line' ? undefined : String(children);

   const stagger = defaultStaggerTimes[per];

   const delayedContainerVariants = {
     hidden : containerVariants.hidden,
     visible : {
       ...containerVariants.visible,
       transition : {
         ...(containerVariants.visible as TargetAndTransition)?.transition,
         staggerChildren :
           (containerVariants.visible as TargetAndTransition)?.transition?.staggerChildren || stagger,
         delayChildren : delay,
       }
     },
     exit : containerVariants.exit
   };

   return (
     <AnimatePresence mode='popLayout'>
       {trigger && (
         <MotionTag
           initial='hidden'
           animate='visible'
           exit='exit'
           aria-label={ariaLabel}
           variants={delayedContainerVariants}
           className={cn('whitespace-pre-wrap', className)}
           onAnimationComplete={onAnimationComplete}
         >
           {segments.map((segment, index) => (
             <AnimationComponent
               key={`${per}-${index}-${segment}`}
               segment={segment}
               variants={itemVariants}
               per={per}
               segmentWrapperClassName={segmentWrapperClassName}
             />
           ))}
         </MotionTag>
       )}
     </AnimatePresence>
   );
});

TextEffect.displayName = "TextEffect";