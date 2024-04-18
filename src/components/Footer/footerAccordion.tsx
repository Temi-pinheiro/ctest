/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { Group } from '..';
import { accordionVariants } from '../../constants/framer';

export const FooterAccordion = ({
  title,
  children,
  isOpen,
  setIsOpen,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (v: any) => any;
}) => {
  return (
    <div className=' flex flex-col text-xl text-[#2C2844] h-full w-full'>
      <Group key='title'>
        <div
          className='hover:cursor-pointer flex gap-x-3 justify-between items-center w-full'
          onClick={() => setIsOpen(!isOpen ? title : null)}
        >
          <h1 className='font-bold text-xl'>{title}</h1>
          <motion.svg
            width='12'
            height='8'
            viewBox='0 0 12 8'
            animate={{ rotate: isOpen ? 0 : 180 }}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M11.7071 7.20711C12.0976 6.81658 12.0976 6.18342 11.7071 5.79289L6.70711 0.792894C6.31658 0.402369 5.68342 0.402369 5.29289 0.792894L0.292893 5.79289C-0.0976306 6.18342 -0.0976305 6.81658 0.292893 7.20711C0.683417 7.59763 1.31658 7.59763 1.70711 7.20711L6 2.91421L10.2929 7.20711C10.6834 7.59763 11.3166 7.59763 11.7071 7.20711Z'
              fill='#2C2844'
            />
          </motion.svg>
        </div>
      </Group>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key={title}
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={accordionVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            // className='flex flex-col mt-6'
          >
            <ul className='w-full flex flex-col gap-y-5 text-black/70 text-base pt-5'>
              {children}
            </ul>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};
