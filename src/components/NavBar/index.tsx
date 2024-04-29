'use client';
import { Link } from 'react-router-dom';
import { Group } from '../Group';
import { CurrencySelector } from './components/CurrencySelector';
import { openModal, useAuth } from '../../providers';
import { AuthModal } from '../../actions/auth/Auth';
import { Bag } from './components/Bag';
import { SignupModal } from '../../actions';
import { ProfileDropdown } from './components/ProfileDropdown';

export const NavBar = () => {
  const popup = openModal();
  const { isAuthenticated } = useAuth();

  return (
    <div className='w-full max-w-[1440px] px-10 fr:px-10 xl:px-12 ds:px-20 py-6 mx-auto hidden fr:flex items-center text-black rounded-lg justify-between z-[30] bg-transparent absolute inset-0 h-fit '>
      <Group key='left'>
        <Link to='/'>
          <img src='/cowas.svg' alt='logo' className='w-[137px]' />
        </Link>
      </Group>
      <Group key='center'>
        <ul className='flex gap-x-8 items-center font-medium text-black'>
          <Link className='' to='/shop'>
            Shop
          </Link>

          <li>
            <Link to='/about-us'>About Us</Link>
          </li>
        </ul>
      </Group>
      <Group key='right'>
        <div className=' flex items-center gap-x-6 text-sm'>
          <CurrencySelector />
          <button>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.5303 14.4697C15.2374 14.1768 14.7626 14.1768 14.4697 14.4697C14.1768 14.7626 14.1768 15.2374 14.4697 15.5303L15.5303 14.4697ZM20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L20.4697 21.5303ZM10 16.25C6.54822 16.25 3.75 13.4518 3.75 10H2.25C2.25 14.2802 5.71979 17.75 10 17.75V16.25ZM16.25 10C16.25 13.4518 13.4518 16.25 10 16.25V17.75C14.2802 17.75 17.75 14.2802 17.75 10H16.25ZM10 3.75C13.4518 3.75 16.25 6.54822 16.25 10H17.75C17.75 5.71979 14.2802 2.25 10 2.25V3.75ZM10 2.25C5.71979 2.25 2.25 5.71979 2.25 10H3.75C3.75 6.54822 6.54822 3.75 10 3.75V2.25ZM14.4697 15.5303L20.4697 21.5303L21.5303 20.4697L15.5303 14.4697L14.4697 15.5303Z'
                fill='black'
              />
            </svg>
          </button>
          <Link to='/wishlist'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21 8.50003C21 14.7444 12.0004 20 12.0004 20C12.0004 20 3 14.6667 3 8.51268C3 6.00003 5 4.00003 7.5 4.00003C10 4.00003 12 7.00003 12 7.00003C12 7.00003 14 4.00003 16.5 4.00003C19 4.00003 21 6.00003 21 8.50003Z'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
          <Bag />
          {!isAuthenticated ? (
            <div className='flex items-center gap-x-3'>
              <button
                onClick={() => popup({ component: <AuthModal /> })}
                className='rounded-lg bg-[#EABEAF] py-2 px-6 font-medium text-white text-base'
              >
                Login
              </button>
              <button
                onClick={() => popup({ component: <SignupModal /> })}
                className='rounded-lg text-[#2C2844] border-[#2C2844] border py-2 px-6 font-medium  text-base'
              >
                Sign Up
              </button>
            </div>
          ) : (
            <ProfileDropdown />
          )}
        </div>
      </Group>
    </div>
  );
};
