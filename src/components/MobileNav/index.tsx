/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Group } from '..';
import { MobileNavLink } from '../MobileNavLink';
import { Link, useLocation } from 'react-router-dom';
export const MobileNav = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  useEffect(() => {
    isOpen && setIsOpen(false);
  }, [pathname]);
  return (
    <div className='fr:hidden overflow-y-clip'>
      <div className='fixed bg-[#12213c] p-4 text-white h-[72px] z-[22] flex items-center justify-between inset-0 w-full'>
        <Link to='/'>
          <svg
            width='102'
            height='32'
            viewBox='0 0 102 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.99603 0.115948C6.85075 -0.319962 5.62166 0.527447 5.62166 1.75148V3.96939L22.0746 10.1977C23.2199 10.6336 24.449 9.78617 24.449 8.56213V6.34422L7.99603 0.115948ZM0 6.7069V8.94225V17.5733C0 18.7938 1.2221 19.6412 2.36738 19.2123L4.78016 18.3126V10.7173L22.0886 17.1339C23.2374 17.5593 24.4525 16.7119 24.4525 15.4948V13.2595L2.3604 5.06788C1.21861 4.64243 0 5.48635 0 6.7069Z'
              fill='#00AEEF'
            />
            <path
              d='M0 15.4111V17.6464C0 18.867 1.21861 19.7109 2.36389 19.2889L23.3072 11.5227C23.9951 11.2682 24.449 10.6126 24.449 9.88024V6.34763L0 15.4111ZM5.62166 25.1371L23.3177 18.438C23.9986 18.18 24.449 17.5278 24.449 16.8025V13.2559L5.62166 20.3839V25.1371ZM5.62166 32L9.26003 30.6435C9.94441 30.3889 10.3983 29.7333 10.3983 29.0045V25.4753L5.62166 27.2573V32Z'
              fill='white'
            />
            <path
              d='M49.0201 22.2601L53.8247 16.8373C56.5064 14.0161 57.6901 12.3946 57.6901 9.93603V9.85233C57.6901 6.83933 55.4135 4.72952 52.2884 4.72952C49.8826 4.72952 48.245 5.71642 46.9146 7.3938C45.7763 5.86637 43.8105 5.00502 41.3139 5.00502H35.5282V24.1781H37.5848V17.4127H41.066C44.9872 17.3849 48.0599 15.1948 48.0599 11.1357V11.0799C48.0599 10.4417 47.9831 9.84187 47.833 9.29437C49.1074 7.52632 50.3575 6.61614 52.0963 6.61614C54.0168 6.61614 55.5462 7.93084 55.5462 10.0406C55.5462 11.8157 54.6697 13.2176 52.3652 15.6831L46.1674 22.5844V24.1746H57.8228V22.2566H49.0201V22.2601ZM45.9754 11.1949C45.9754 13.8243 44.1108 15.5505 41.1219 15.5505H37.5848V6.89512H41.2057C44.1073 6.89512 45.9719 8.37373 45.9719 11.167V11.1949H45.9754Z'
              fill='white'
            />
            <path
              d='M71.4021 5.00507L65.7246 21.3325L60.075 5.00507H57.8263L64.7644 24.3176H66.6569L73.567 5.00507H71.4021ZM77.9456 9.63268C74.6005 9.63268 72.0481 12.6736 72.0481 17.0292V17.1652C72.0481 21.6847 74.9008 24.478 78.3856 24.478C80.526 24.478 82.0065 23.655 83.2949 22.3403L82.1706 21.0814C81.1824 22.0683 80.0302 22.7239 78.4694 22.7239C76.2207 22.7239 74.2723 20.9698 74.0523 17.8208H83.6511C83.679 17.5732 83.679 17.1896 83.679 16.9978C83.679 12.7015 81.5386 9.63268 77.9456 9.63268ZM74.0523 16.2899C74.2444 13.3048 75.8331 11.3589 77.9456 11.3589C80.2781 11.3589 81.5665 13.5768 81.7027 16.2899H74.0523ZM89.5486 16.0702C87.6002 15.2472 86.3676 14.6474 86.3676 13.4408V13.385C86.3676 12.2621 87.3278 11.3868 88.8363 11.3868C90.0968 11.3868 91.3328 11.9343 92.4292 12.7294L93.3895 11.2229C92.1813 10.3197 90.5088 9.68848 88.8921 9.68848C86.3397 9.68848 84.4472 11.2508 84.4472 13.5768V13.6326C84.4472 15.8505 86.2559 16.7537 88.5325 17.7406C90.4529 18.5357 91.6331 19.1913 91.6331 20.4537V20.4816C91.6331 21.8242 90.5367 22.6995 88.9725 22.6995C87.5478 22.6995 86.1477 22.0962 84.8033 20.9733L83.7593 22.424C85.2677 23.7387 87.1602 24.4222 88.9166 24.4222C91.4935 24.4222 93.5501 22.8599 93.5501 20.3142V20.2584C93.5536 18.0963 91.9055 17.1094 89.5486 16.0702ZM102 11.6588V9.90469H98.2709V5.74437H96.2946V9.90818H94.5662V11.6623H96.2946V20.8652C96.2946 23.4109 97.8309 24.3978 99.8596 24.3978C100.684 24.3978 101.368 24.206 102 23.9061V22.2078C101.424 22.4554 100.876 22.5914 100.328 22.5914C99.0949 22.5914 98.2709 22.0439 98.2709 20.5374V11.6588H102Z'
              fill='white'
            />
          </svg>
        </Link>

        <button
          key='menu'
          onClick={() => setIsOpen(true)}
          className='flex items-center py-2 px-4 border border-white gap-x-2 rounded-[80px] relative z-[22]'
        >
          Menu
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
      <AnimatePresence key='close'>
        {isOpen && (
          <motion.div
            layout
            className='fixed inset-0 w-full max-h-screen bg-[#12213C] bg-opacity-90 text-2xl z-[30] overflow-y-scroll'
            initial={{ y: -window.innerHeight, opacity: 0 }}
            transition={{
              type: 'tween',
              ease: [0.4, 0.0, 0.2, 1],
              duration: 0.3,
            }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -window.innerHeight, opacity: 0 }}
          >
            <div className='bg-[#12213c] relative w-full  overflow-y-scroll'>
              <Group key='header'>
                <div className=' bg-[#12213c] p-4 text-white h-[72px] z-[30] flex items-center justify-between inset-0 w-full'>
                  <Link to='/'>
                    <svg
                      width='102'
                      height='32'
                      viewBox='0 0 102 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.99603 0.115948C6.85075 -0.319962 5.62166 0.527447 5.62166 1.75148V3.96939L22.0746 10.1977C23.2199 10.6336 24.449 9.78617 24.449 8.56213V6.34422L7.99603 0.115948ZM0 6.7069V8.94225V17.5733C0 18.7938 1.2221 19.6412 2.36738 19.2123L4.78016 18.3126V10.7173L22.0886 17.1339C23.2374 17.5593 24.4525 16.7119 24.4525 15.4948V13.2595L2.3604 5.06788C1.21861 4.64243 0 5.48635 0 6.7069Z'
                        fill='#00AEEF'
                      />
                      <path
                        d='M0 15.4111V17.6464C0 18.867 1.21861 19.7109 2.36389 19.2889L23.3072 11.5227C23.9951 11.2682 24.449 10.6126 24.449 9.88024V6.34763L0 15.4111ZM5.62166 25.1371L23.3177 18.438C23.9986 18.18 24.449 17.5278 24.449 16.8025V13.2559L5.62166 20.3839V25.1371ZM5.62166 32L9.26003 30.6435C9.94441 30.3889 10.3983 29.7333 10.3983 29.0045V25.4753L5.62166 27.2573V32Z'
                        fill='white'
                      />
                      <path
                        d='M49.0201 22.2601L53.8247 16.8373C56.5064 14.0161 57.6901 12.3946 57.6901 9.93603V9.85233C57.6901 6.83933 55.4135 4.72952 52.2884 4.72952C49.8826 4.72952 48.245 5.71642 46.9146 7.3938C45.7763 5.86637 43.8105 5.00502 41.3139 5.00502H35.5282V24.1781H37.5848V17.4127H41.066C44.9872 17.3849 48.0599 15.1948 48.0599 11.1357V11.0799C48.0599 10.4417 47.9831 9.84187 47.833 9.29437C49.1074 7.52632 50.3575 6.61614 52.0963 6.61614C54.0168 6.61614 55.5462 7.93084 55.5462 10.0406C55.5462 11.8157 54.6697 13.2176 52.3652 15.6831L46.1674 22.5844V24.1746H57.8228V22.2566H49.0201V22.2601ZM45.9754 11.1949C45.9754 13.8243 44.1108 15.5505 41.1219 15.5505H37.5848V6.89512H41.2057C44.1073 6.89512 45.9719 8.37373 45.9719 11.167V11.1949H45.9754Z'
                        fill='white'
                      />
                      <path
                        d='M71.4021 5.00507L65.7246 21.3325L60.075 5.00507H57.8263L64.7644 24.3176H66.6569L73.567 5.00507H71.4021ZM77.9456 9.63268C74.6005 9.63268 72.0481 12.6736 72.0481 17.0292V17.1652C72.0481 21.6847 74.9008 24.478 78.3856 24.478C80.526 24.478 82.0065 23.655 83.2949 22.3403L82.1706 21.0814C81.1824 22.0683 80.0302 22.7239 78.4694 22.7239C76.2207 22.7239 74.2723 20.9698 74.0523 17.8208H83.6511C83.679 17.5732 83.679 17.1896 83.679 16.9978C83.679 12.7015 81.5386 9.63268 77.9456 9.63268ZM74.0523 16.2899C74.2444 13.3048 75.8331 11.3589 77.9456 11.3589C80.2781 11.3589 81.5665 13.5768 81.7027 16.2899H74.0523ZM89.5486 16.0702C87.6002 15.2472 86.3676 14.6474 86.3676 13.4408V13.385C86.3676 12.2621 87.3278 11.3868 88.8363 11.3868C90.0968 11.3868 91.3328 11.9343 92.4292 12.7294L93.3895 11.2229C92.1813 10.3197 90.5088 9.68848 88.8921 9.68848C86.3397 9.68848 84.4472 11.2508 84.4472 13.5768V13.6326C84.4472 15.8505 86.2559 16.7537 88.5325 17.7406C90.4529 18.5357 91.6331 19.1913 91.6331 20.4537V20.4816C91.6331 21.8242 90.5367 22.6995 88.9725 22.6995C87.5478 22.6995 86.1477 22.0962 84.8033 20.9733L83.7593 22.424C85.2677 23.7387 87.1602 24.4222 88.9166 24.4222C91.4935 24.4222 93.5501 22.8599 93.5501 20.3142V20.2584C93.5536 18.0963 91.9055 17.1094 89.5486 16.0702ZM102 11.6588V9.90469H98.2709V5.74437H96.2946V9.90818H94.5662V11.6623H96.2946V20.8652C96.2946 23.4109 97.8309 24.3978 99.8596 24.3978C100.684 24.3978 101.368 24.206 102 23.9061V22.2078C101.424 22.4554 100.876 22.5914 100.328 22.5914C99.0949 22.5914 98.2709 22.0439 98.2709 20.5374V11.6588H102Z'
                        fill='white'
                      />
                    </svg>
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
                <ul className='text-white overflow-y-scroll pt-4'>
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
                    className='py-4 text-2xl bg-[#25334C] px-4 flex relative'
                    style={{
                      fontWeight: pathname == '/about-us' ? 'bold' : 'normal',
                    }}
                  >
                    About us
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

                  <MobileNavLink
                    isOpen={activeTab == 'Personal'}
                    setIsOpen={setActiveTab}
                    title='Personal'
                    key={'personal'}
                    bgColor='#38455B'
                    paths={[
                      {
                        label: 'Accountable PISP',
                        to: '/lend',
                      },
                      {
                        label: 'Monthly Bookkeeping',
                        to: '/borrow',
                      },
                      {
                        label: 'Tax Filing & Advisory',
                        to: '/bnpl',
                      },
                      {
                        label: 'Accountable FMCC',
                        to: '/parasol-insurance',
                      },
                      {
                        label: 'Catchup Accounting',
                        to: '/bail-me',
                      },
                    ]}
                  />
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
