/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth, useCart } from '../../../providers';
import { useOutsideClick } from '../../../hooks';
import { dropdown } from '../../../constants/framer';

export const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { clearAuth } = useAuth();
  const { resetCart } = useCart();
  const handleLogout = () => {
    clearAuth();
    resetCart();
  };
  const containerRef = useOutsideClick<HTMLDivElement>(handleClickOutside);

  function handleClickOutside(e: any) {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  const links = [
    {
      label: 'Orders',
      icon: (
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M8.61 3L14.35 4.53L15 5V11.74L14.63 12.22L8.5 13.91L2.36 12.22L2 11.74V5L2.61 4.53L8.34 3H8.61ZM8.52 4L4.52 5L5.07 5.2L8.5 6.1L11.5 5.29L12.45 5L8.52 4ZM3 11.36L8 12.73V7L3 5.66V11.36ZM9 7V12.73L14 11.36V5.63L11.98 6.183V8.75L10.98 9.01V6.457L9 7Z'
            fill='inherit'
          />
        </svg>
      ),
      path: '/my-account/orders',
    },
    {
      label: 'Returns',
      icon: (
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.375 6.5V8.5C11.375 8.59946 11.3355 8.69484 11.2652 8.76517C11.1948 8.83549 11.0995 8.875 11 8.875H5.905L6.765 9.735C6.80184 9.76933 6.83139 9.81073 6.85189 9.85673C6.87239 9.90273 6.88341 9.95239 6.8843 10.0027C6.88518 10.0531 6.87592 10.1031 6.85706 10.1498C6.8382 10.1965 6.81013 10.2389 6.77452 10.2745C6.73891 10.3101 6.69649 10.3382 6.6498 10.3571C6.6031 10.3759 6.55309 10.3852 6.50274 10.3843C6.45239 10.3834 6.40273 10.3724 6.35673 10.3519C6.31073 10.3314 6.26933 10.3018 6.235 10.265L4.735 8.765C4.66477 8.69469 4.62533 8.59938 4.62533 8.5C4.62533 8.40062 4.66477 8.30531 4.735 8.235L6.235 6.735C6.30609 6.66876 6.40011 6.6327 6.49726 6.63441C6.59441 6.63613 6.6871 6.67548 6.75581 6.74419C6.82452 6.8129 6.86387 6.90559 6.86559 7.00274C6.8673 7.09989 6.83124 7.19391 6.765 7.265L5.905 8.125H10.625V6.5C10.625 6.40054 10.6645 6.30516 10.7348 6.23484C10.8052 6.16451 10.9005 6.125 11 6.125C11.0995 6.125 11.1948 6.16451 11.2652 6.23484C11.3355 6.30516 11.375 6.40054 11.375 6.5ZM14.375 3.5V12.5C14.375 12.7321 14.2828 12.9546 14.1187 13.1187C13.9546 13.2828 13.7321 13.375 13.5 13.375H2.5C2.26794 13.375 2.04538 13.2828 1.88128 13.1187C1.71719 12.9546 1.625 12.7321 1.625 12.5V3.5C1.625 3.26794 1.71719 3.04538 1.88128 2.88128C2.04538 2.71719 2.26794 2.625 2.5 2.625H13.5C13.7321 2.625 13.9546 2.71719 14.1187 2.88128C14.2828 3.04538 14.375 3.26794 14.375 3.5ZM13.625 3.5C13.625 3.46685 13.6118 3.43505 13.5884 3.41161C13.5649 3.38817 13.5332 3.375 13.5 3.375H2.5C2.46685 3.375 2.43505 3.38817 2.41161 3.41161C2.38817 3.43505 2.375 3.46685 2.375 3.5V12.5C2.375 12.5332 2.38817 12.5649 2.41161 12.5884C2.43505 12.6118 2.46685 12.625 2.5 12.625H13.5C13.5332 12.625 13.5649 12.6118 13.5884 12.5884C13.6118 12.5649 13.625 12.5332 13.625 12.5V3.5Z'
            fill='inherit'
          />
        </svg>
      ),
      path: '/my-account/returns',
    },
    {
      label: 'Wallet',
      icon: (
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.7148 9.14244C10.6012 9.14244 10.4922 9.18759 10.4118 9.26796C10.3314 9.34834 10.2863 9.45735 10.2863 9.57101C10.2863 9.68467 10.3314 9.79368 10.4118 9.87406C10.4922 9.95443 10.6012 9.99958 10.7148 9.99958H12.1434C12.2571 9.99958 12.3661 9.95443 12.4465 9.87406C12.5268 9.79368 12.572 9.68467 12.572 9.57101C12.572 9.45735 12.5268 9.34834 12.4465 9.26796C12.3661 9.18759 12.2571 9.14244 12.1434 9.14244H10.7148ZM1.71484 3.2853C1.71484 2.86853 1.8804 2.46883 2.1751 2.17413C2.4698 1.87943 2.8695 1.71387 3.28627 1.71387H11.0006C11.4173 1.71387 11.817 1.87943 12.1117 2.17413C12.4064 2.46883 12.572 2.86853 12.572 3.2853V4.00415C13.1144 4.04039 13.6228 4.28144 13.9941 4.67846C14.3655 5.07549 14.572 5.59881 14.572 6.14244V12.1424C14.572 12.7108 14.3462 13.2558 13.9444 13.6577C13.5425 14.0595 12.9975 14.2853 12.4291 14.2853H3.85999C3.29167 14.2853 2.74662 14.0595 2.34476 13.6577C1.94289 13.2558 1.71713 12.7108 1.71713 12.1424V6.14244H1.71484V3.42815H1.72113C1.71705 3.38064 1.71495 3.33298 1.71484 3.2853ZM12.4291 4.85672H2.57427V12.1424C2.57427 12.4834 2.70973 12.8105 2.95085 13.0516C3.19197 13.2927 3.51899 13.4282 3.85999 13.4282H12.4291C12.7701 13.4282 13.0971 13.2927 13.3383 13.0516C13.5794 12.8105 13.7148 12.4834 13.7148 12.1424V6.14244C13.7148 5.80145 13.5794 5.47442 13.3383 5.2333C13.0971 4.99218 12.7701 4.85672 12.4291 4.85672ZM11.7148 3.2853C11.7148 2.89101 11.3948 2.57101 11.0006 2.57101H3.28627C3.09683 2.57101 2.91515 2.64626 2.7812 2.78022C2.64724 2.91417 2.57199 3.09586 2.57199 3.2853C2.57199 3.47474 2.64724 3.65642 2.7812 3.79037C2.91515 3.92433 3.09683 3.99958 3.28627 3.99958H11.7148V3.2853Z'
            fill='inherit'
          />
        </svg>
      ),
      path: '/my-account/wallet',
    },
  ];

  return (
    <div className='relative w-max'>
      <button
        className='flex items-center gap-x-[10px] '
        onClick={() => setIsOpen(true)}
      >
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M8.75 7C8.75 5.20507 10.2051 3.75 12 3.75C13.7949 3.75 15.25 5.20507 15.25 7C15.25 8.79493 13.7949 10.25 12 10.25C10.2051 10.25 8.75 8.79493 8.75 7ZM12 2.25C9.37665 2.25 7.25 4.37665 7.25 7C7.25 9.62335 9.37665 11.75 12 11.75C14.6234 11.75 16.75 9.62335 16.75 7C16.75 4.37665 14.6234 2.25 12 2.25ZM5.75 18.3333C5.75 16.8886 6.88707 15.75 8.25 15.75H15.75C17.1129 15.75 18.25 16.8886 18.25 18.3333V19.25H5.75V18.3333ZM8.25 14.25C6.02307 14.25 4.25 16.0962 4.25 18.3333V20C4.25 20.4142 4.58579 20.75 5 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V18.3333C19.75 16.0962 17.9769 14.25 15.75 14.25H8.25Z'
            fill='inherit'
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={dropdown}
            initial='initial'
            animate='animate'
            exit='exit'
            className='absolute bg-white shadow-md mt-8 p-5 w-[204px] rounded-[20px] right-0 z-10'
            ref={containerRef}
          >
            <Link
              to='/my-account'
              className='group py-[7px] px-[5px] w-full flex items-center gap-x-[10px] rounded-full duration-200 transition-all ease-in-out'
            >
              <span className='w-[22px] h-[22px] rounded-full flex items-center justify-center stroke-black group-hover:stroke-[#EABEAF] duration-200 transition-colors ease-in-out'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.66602 12.0007C2.66602 11.2934 2.94697 10.6151 3.44706 10.115C3.94716 9.61494 4.62544 9.33398 5.33268 9.33398H10.666C11.3733 9.33398 12.0515 9.61494 12.5516 10.115C13.0517 10.6151 13.3327 11.2934 13.3327 12.0007C13.3327 12.3543 13.1922 12.6934 12.9422 12.9435C12.6921 13.1935 12.353 13.334 11.9993 13.334H3.99935C3.64573 13.334 3.30659 13.1935 3.05654 12.9435C2.80649 12.6934 2.66602 12.3543 2.66602 12.0007Z'
                    stroke='inherit'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8 6.66699C9.10457 6.66699 10 5.77156 10 4.66699C10 3.56242 9.10457 2.66699 8 2.66699C6.89543 2.66699 6 3.56242 6 4.66699C6 5.77156 6.89543 6.66699 8 6.66699Z'
                    stroke='inherit'
                  />
                </svg>
              </span>
              <span className='text-[15px] group-hover:text-[#EABEAF] duration-200 transition-colors ease-in-out'>
                My account
              </span>
            </Link>
            {links.map((link) => (
              <Link
                to={link.path}
                className='group py-[7px] px-[5px] w-full flex items-center gap-x-[10px] rounded-full duration-200 transition-all ease-in-out'
              >
                <span className='w-[22px] h-[22px] rounded-full flex items-center justify-center group-hover:fill-[#EABEAF] duration-200 transition-colors ease-in-out'>
                  {link.icon}
                </span>
                <span className='text-[15px] group-hover:text-[#EABEAF] duration-200 transition-colors ease-in-out'>
                  {link.label}
                </span>
              </Link>
            ))}
            <button
              onClick={() => handleLogout()}
              className='group py-[7px] px-[5px] w-full flex items-center gap-x-[10px] rounded-full duration-200 transition-all ease-in-out'
            >
              <span className='w-[22px] h-[22px] rounded-full flex items-center justify-center stroke-black group-hover:stroke-[#EABEAF] duration-200 transition-colors ease-in-out'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.99733 14H4.33333C3.59667 14 3 13.2327 3 12.286V3.71333C3 2.76733 3.59667 2 4.33333 2H9M10.6667 10.3333L13 8L10.6667 5.66667M6.33333 7.99733H13'
                    stroke='inherit'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
              <span className='text-[15px] group-hover:text-[#EABEAF] duration-200 transition-colors ease-in-out'>
                Logout
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
