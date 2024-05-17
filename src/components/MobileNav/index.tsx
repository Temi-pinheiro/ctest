/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Group } from '..';
import { Link, useLocation } from 'react-router-dom';
import { openModal, useAuth, useCart } from '../../providers';
import { AuthModal, HealthClaims, SignupModal } from '../../actions';
import { MobileNavLink } from '../MobileNavLink';
export const MobileNav = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const popup = openModal();
  const { isAuthenticated, setIsAuthenticated, setUser } = useAuth();
  const { cart } = useCart();
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser({});
    localStorage.removeItem('cowas_token');
    localStorage.removeItem('cowas_user');
  };
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
            className='fixed inset-0 w-full h-screen  bg-opacity-90 text-2xl z-[30] overflow-y-scroll'
            initial={{ y: -window.innerHeight, opacity: 0 }}
            transition={{
              type: 'tween',
              ease: [0.4, 0.0, 0.2, 1],
              duration: 0.3,
            }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -window.innerHeight, opacity: 0 }}
          >
            <div className='bg-[#fff] relative w-full h-full flex flex-col overflow-y-scroll'>
              <Group key='header'>
                <div className=' bg-[#fff] p-4 text-black h-[72px] z-[30] flex items-center justify-between inset-0 w-full'>
                  <Link to='/'>
                    <img src='/cowas.svg' />
                  </Link>

                  <button onClick={() => setIsOpen(false)}>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M13.0664 12L21.1523 20.0977L20.0977 21.1523L12 13.0664L3.90234 21.1523L2.84766 20.0977L10.9336 12L2.84766 3.90234L3.90234 2.84766L12 10.9336L20.0977 2.84766L21.1523 3.90234L13.0664 12Z'
                        fill='black'
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
                  </Link>
                  <Link
                    to='/about-us'
                    className='py-4 text-2xl px-4 flex relative'
                    style={{
                      fontWeight: pathname == '/about-us' ? 'bold' : 'normal',
                    }}
                  >
                    About Us
                  </Link>
                  <Link
                    to='/shop'
                    className='py-4 text-2xl px-4 flex relative'
                    style={{
                      fontWeight: pathname == '/shop' ? 'bold' : 'normal',
                    }}
                  >
                    Shop
                  </Link>
                  {isAuthenticated && (
                    <Link
                      to='/wishlist'
                      className='py-4 text-2xl px-4 flex relative'
                      style={{
                        fontWeight: pathname == '/wishlist' ? 'bold' : 'normal',
                      }}
                    >
                      Wishlist
                    </Link>
                  )}
                  <Link
                    to='/bag'
                    className='py-4 text-2xl px-4 flex relative items-center gap-x-3'
                    style={{
                      fontWeight: pathname == '/shop' ? 'bold' : 'normal',
                    }}
                  >
                    Bag
                    <span className=' w-8 h-8 rounded-full flex items-center bg-[#EABEAF] text-white font-semibold text-[15px] justify-center'>
                      {cart.items.length}
                    </span>
                  </Link>
                  {isAuthenticated && (
                    <>
                      {' '}
                      <MobileNavLink
                        isOpen={activeTab == 'Account'}
                        setIsOpen={setActiveTab}
                        title='Account'
                        key={'account'}
                        paths={[
                          {
                            label: 'My account',
                            to: '/my-account',
                          },
                          {
                            label: 'Profile',
                            to: '/my-account/profile',
                          },
                          {
                            label: 'Orders',
                            to: '/my-account/orders',
                          },
                          {
                            label: 'Wallet',
                            to: '/my-account/wallet',
                          },
                        ]}
                      />
                    </>
                  )}
                  <button
                    className='py-4 text-2xl px-4 flex relative items-center gap-x-3'
                    onClick={() => popup({ component: <HealthClaims /> })}
                  >
                    Health Notice
                  </button>
                </ul>
              </Group>
              {!isAuthenticated ? (
                <Group key='buttons'>
                  <div className='flex flex-col items-center mt-auto justify-between p-5 gap-5 bg-[#fff]'>
                    <button
                      onClick={() => popup({ component: <AuthModal /> })}
                      className='flex px-5 py-3 rounded-md bg-[#EABEAF] text-xl text-whitefont-extrabold w-full justify-center'
                    >
                      Login
                    </button>
                    <button
                      onClick={() => popup({ component: <SignupModal /> })}
                      className='flex px-5 py-3 rounded-md bg-[#EABEAF] text-xl text-whitefont-extrabold w-full justify-center'
                    >
                      Sign Up
                    </button>
                  </div>
                </Group>
              ) : (
                <div className='flex flex-col items-center mt-auto justify-between p-5 gap-5 bg-[#fff]'>
                  <button
                    onClick={handleLogout}
                    className='flex px-5 py-3 rounded-md bg-[#EABEAF] text-xl text-whitefont-extrabold w-full justify-center'
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
