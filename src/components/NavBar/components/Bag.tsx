/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Group } from '../../Group';
import { useCart } from '../../../providers';
import { useOutsideClick } from '../../../hooks';
import { dropdown } from '../../../constants/framer';
import { BagItem } from './BagItem';
import { Link } from 'react-router-dom';
import { getFullMoney } from '../../../utils/FormatAmount';

export const Bag = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useOutsideClick<HTMLDivElement>(handleClickOutside);

  function handleClickOutside(e: any) {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }
  return (
    <div className='relative w-max'>
      <button onClick={() => setIsOpen(true)} className='relative'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4 9H20L19.165 18.181C19.1198 18.6779 18.8906 19.14 18.5222 19.4766C18.1538 19.8131 17.673 19.9998 17.174 20H6.826C6.32704 19.9998 5.84617 19.8131 5.4778 19.4766C5.10942 19.14 4.88016 18.6779 4.835 18.181L4 9Z'
            stroke='black'
            strokeWidth='1.5'
            strokeLinejoin='round'
          />
          <path
            d='M8 11V8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8V11'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </svg>
        {cart.items?.length > 0 && (
          <span className='absolute -top-1 -right-2 flex w-[18px] h-[18px] rounded-full bg-[#EABEAF] items-center justify-center text-xs text-white font-medium'>
            {cart.items.length}
          </span>
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={dropdown}
            initial='initial'
            animate='animate'
            exit='exit'
            className='absolute bg-white shadow-md mt-6 w-[468px] right-0 z-[200] max-h-[700px] h-auto overflow-y-scroll rounded-xl'
            ref={containerRef}
          >
            <Group key='header'>
              <header className=' flex items-center justify-end p-6'>
                <button
                  onClick={() => setIsOpen(false)}
                  className='fill-[#BDBDBD] hover:fill-[#F14E53] transition-colors duration-200 ease-in-out'
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 36 36'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M19.5996 18L31.7285 30.1465L30.1465 31.7285L18 19.5996L5.85352 31.7285L4.27148 30.1465L16.4004 18L4.27148 5.85352L5.85352 4.27148L18 16.4004L30.1465 4.27148L31.7285 5.85352L19.5996 18Z'
                      fill='inherit'
                    />
                  </svg>
                </button>
              </header>
            </Group>

            {cart.items.length < 1 ? (
              <Group key='empty'>
                <div className='w-full h-[300px] flex flex-col items-center justify-center'>
                  <h5 className='text-lg font-medium'>Cart Empty</h5>
                  <span className='text-sm text-[#BDBDBD]'>
                    Please add items to view them here
                  </span>
                </div>
              </Group>
            ) : (
              <Group key='not empty'>
                <div className='flex flex-col w-full h-full px-[46px] pb-10'>
                  <div className='flex flex-col w-full gap-y-10 overflow-y-scroll h-full pb-3 '>
                    {cart.items.map((item) => (
                      <BagItem key={item.itemId} item={item} />
                    ))}
                  </div>
                  <div className='flex flex-col gap-y-3 mt-6 border-b pb-10'>
                    <div className='flex items-center w-full justify-between'>
                      <span className='font-medium'>Subtotal</span>
                      <span>{getFullMoney(Number(cart.bill))}</span>
                    </div>
                    <div className='flex items-center w-full justify-between'>
                      <span className='font-medium'>Discount</span>
                      <span>0</span>
                    </div>
                    <div className='flex items-center w-full justify-between'>
                      <span className='font-medium'>Total</span>
                      <span>{getFullMoney(Number(cart.bill))}</span>
                    </div>
                  </div>
                  <div className='flex flex-col gap-y-5 items-center mt-10'>
                    <Link
                      className='py-3 w-full block text-center rounded-lg border border-transparent bg-[#EABEAF] text-white'
                      to='/checkout'
                    >
                      Go to Checkout
                    </Link>
                    <Link
                      className='py-3 w-full block text-center rounded-lg border border-[#2C2844] text-[#2C2844]'
                      to='/bag'
                    >
                      View Bag
                    </Link>
                  </div>
                </div>
              </Group>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
