/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Group } from '..';
import { Link, useLocation } from 'react-router-dom';
export const MobileNav = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    isOpen && setIsOpen(false);
  }, [pathname]);
  return (
    <div className='fr:hidden overflow-y-clip'>
      <div className='fixed bg-[#fff] p-4 text-black h-[72px] z-[22] flex items-center justify-between inset-0 w-full border-b'>
        <Link to='/'>
          <img src='/cowas.svg' />
        </Link>

        <button
          key='menu'
          onClick={() => setIsOpen(true)}
          className='flex items-center py-2 px-4 border border-black gap-x-2 rounded-[80px] relative z-[22]'
        >
          Menu
        </button>
      </div>
      <AnimatePresence key='close'>
        {isOpen && (
          <motion.div
            layout
            className='fixed inset-0 w-full max-h-screen bg-[#12213C] h-full bg-opacity-90 text-2xl z-[30] overflow-y-scroll'
            initial={{ y: -window.innerHeight, opacity: 0 }}
            transition={{
              type: 'tween',
              ease: [0.4, 0.0, 0.2, 1],
              duration: 0.3,
            }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -window.innerHeight, opacity: 0 }}
          >
            <div className='bg-[#fff] relative w-full  overflow-y-scroll'>
              <Group key='header'>
                <div className=' bg-[#fff] p-4 text-black h-[72px] z-[30] flex items-center justify-between inset-0 w-full'>
                  <Link to='/'>
                    <img src='/cowas.svg' />
                  </Link>

                  <button
                    onClick={() => setIsOpen(false)}
                    className='flex items-center py-2 px-4 border border-white gap-x-2 rounded-[80px]'
                  >
                    Close
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 2.80001C0 2.13727 0.596955 1.60001 1.33333 1.60001H14.6667C15.403 1.60001 16 2.13727 16 2.80001C16 3.46274 15.403 4.00001 14.6667 4.00001H1.33333C0.596953 4.00001 0 3.46274 0 2.80001Z'
                        fill='white'
                      />
                      <path
                        d='M0 7.99999C0 7.33725 0.596955 6.79999 1.33333 6.79999H9.33333C10.0697 6.79999 10.6667 7.33725 10.6667 7.99999C10.6667 8.66272 10.0697 9.19999 9.33333 9.19999H1.33333C0.596953 9.19999 0 8.66272 0 7.99999Z'
                        fill='white'
                      />
                      <path
                        d='M0 13.2C0 12.5373 0.596955 12 1.33333 12H14.6667C15.403 12 16 12.5373 16 13.2C16 13.8627 15.403 14.4 14.6667 14.4H1.33333C0.596953 14.4 0 13.8627 0 13.2Z'
                        fill='white'
                      />
                    </svg>
                  </button>
                </div>
              </Group>
              <Group key='links'>
                <ul className='text-black overflow-y-scroll pt-4'>
                  <Link
                    to='/'
                    className='py-4 text-2xl px-4 flex relative'
                    style={{ fontWeight: pathname == '/' ? 'bold' : 'normal' }}
                  >
                    Home
                    {pathname == '/' && (
                      <span className='absolute left-0 top-[50%] translate-y-[-50%]'>
                        <svg
                          width='6'
                          height='28'
                          viewBox='0 0 6 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2 4L2 24'
                            stroke='#00AEEF'
                            stroke-width='8'
                            stroke-linecap='round'
                          />
                        </svg>
                      </span>
                    )}
                  </Link>
                  <Link
                    to='/about-us'
                    className='py-4 text-2xl px-4 flex relative'
                    style={{
                      fontWeight: pathname == '/about-us' ? 'bold' : 'normal',
                    }}
                  >
                    About Us
                    {pathname == '/about-us' && (
                      <span className='absolute left-0 top-[50%] translate-y-[-50%]'>
                        <svg
                          width='6'
                          height='28'
                          viewBox='0 0 6 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2 4L2 24'
                            stroke='#00AEEF'
                            stroke-width='8'
                            stroke-linecap='round'
                          />
                        </svg>
                      </span>
                    )}
                  </Link>
                  <Link
                    to='/shop'
                    className='py-4 text-2xl px-4 flex relative'
                    style={{
                      fontWeight: pathname == '/shop' ? 'bold' : 'normal',
                    }}
                  >
                    Shop
                    {pathname == '/shop' && (
                      <span className='absolute left-0 top-[50%] translate-y-[-50%]'>
                        <svg
                          width='6'
                          height='28'
                          viewBox='0 0 6 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2 4L2 24'
                            stroke='#00AEEF'
                            stroke-width='8'
                            stroke-linecap='round'
                          />
                        </svg>
                      </span>
                    )}
                  </Link>
                </ul>
              </Group>
              <Group key='buttons'>
                <div className='flex items-center justify-between p-5 gap-5 bg-[#9FA6B5]'>
                  <a className='flex px-5 py-3 rounded-[60px] bg-white text-xl text-slate-800 font-extrabold w-full justify-center'>
                    Login
                  </a>
                  <a className='flex px-5 py-3 rounded-[60px] bg-white text-xl text-slate-800 font-extrabold w-full justify-center'>
                    Sign Up
                  </a>
                </div>
              </Group>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
