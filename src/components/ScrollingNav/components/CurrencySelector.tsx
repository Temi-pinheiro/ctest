/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { useOutsideClick } from '../../../hooks';
import { fadeIn } from '../../../constants/framer';

export const CurrencySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('NGN');
  const currencies = [
    {
      id: 'NGN',
      label: 'NGN Naira',
      icon: (
        <svg
          width='24'
          height='18'
          viewBox='0 0 24 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_359_2052)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 0H24V18H0V0Z'
              fill='white'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15.9975 0H24V18H15.9975V0ZM0 0H7.99875V18H0V0Z'
              fill='#008753'
            />
          </g>
          <defs>
            <clipPath id='clip0_359_2052'>
              <rect width='24' height='18' rx='2' fill='white' />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 'USD',
      label: 'US Dollar',
      icon: (
        <svg
          width='24'
          height='18'
          viewBox='0 0 24 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_359_2058)'>
            <path d='M0 0H24V18H0' fill='#BD3D44' />
            <path
              d='M0 2.07422H24H0ZM0 4.83797H24H0ZM0 7.61297H24H0ZM0 10.388H24H0ZM0 13.163H24H0ZM0 15.938H24H0Z'
              fill='black'
            />
            <path
              d='M0 2.07422H24M0 4.83797H24M0 7.61297H24M0 10.388H24M0 13.163H24M0 15.938H24'
              stroke='white'
              strokeWidth='1.3875'
            />
            <path d='M0 0H13.68V9.69375H0' fill='#192F5D' />
          </g>
          <defs>
            <clipPath id='clip0_359_2058'>
              <rect width='24' height='18' rx='2' fill='white' />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 'GBP',
      label: 'GB Pound',
      icon: (
        <svg
          width='24'
          height='18'
          viewBox='0 0 24 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_359_2151)'>
            <path d='M0 0H24V18H0V0Z' fill='#012169' />
            <path
              d='M2.8125 0L11.9625 6.7875L21.075 0H24V2.325L15 9.0375L24 15.7125V18H21L12 11.2875L3.0375 18H0V15.75L8.9625 9.075L0 2.4V0H2.8125Z'
              fill='white'
            />
            <path
              d='M15.9 10.5375L24 16.5V18L13.8375 10.5375H15.9ZM9 11.2875L9.225 12.6L2.025 18H0L9 11.2875ZM24 0V0.1125L14.6625 7.1625L14.7375 5.5125L22.125 0H24ZM0 0L8.9625 6.6H6.7125L0 1.575V0Z'
              fill='#C8102E'
            />
            <path
              d='M9.0375 0V18H15.0375V0H9.0375ZM0 6V12H24V6H0Z'
              fill='white'
            />
            <path
              d='M0 7.2375V10.8375H24V7.2375H0ZM10.2375 0V18H13.8375V0H10.2375Z'
              fill='#C8102E'
            />
          </g>
          <defs>
            <clipPath id='clip0_359_2151'>
              <rect width='24' height='18' rx='2' fill='white' />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];
  const containerRef = useOutsideClick<HTMLDivElement>(handleClickOutside);

  function handleClickOutside(e: any) {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  return (
    <div className='relative w-max'>
      <button
        className='flex items-center gap-x-[10px] '
        onClick={() => setIsOpen(true)}
      >
        <span className=' '>{selected}</span>
        <svg
          width='13'
          height='7'
          viewBox='0 0 13 7'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 1L7.47222 5.59317C6.9375 6.13561 6.0625 6.13561 5.52778 5.59317L1 1'
            stroke='#1D1D1D'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={fadeIn}
            initial='initial'
            animate='animate'
            exit='exit'
            className='absolute bg-white shadow-md mt-6 p-4 w-[196px] rounded-[5px] right-0 z-10 gap-y-4'
            ref={containerRef}
          >
            {currencies.map((curr) => (
              <button
                key={curr.id}
                onClick={() => setSelected(curr.id)}
                className='flex items-center justify-between py-3 px-[10px] rounded-lg hover:shadow-md transition-shadow duration-200 w-full'
              >
                <span className='flex items-center gap-x-2'>
                  {curr.icon}
                  <span>{curr.label}</span>
                </span>
                {selected == curr.id && (
                  <span>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M13.3333 4.66699L6.66666 11.3337L3.33333 8.00033'
                        stroke='black'
                        strokeWidth='1.33333'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
