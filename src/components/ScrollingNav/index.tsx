'use client';
import { Group } from '../Group';
import { AnimatePresence, motion, useTransform } from 'framer-motion';
import { NavLink } from '../NavLink';
import { Link } from 'react-router-dom';
import { useBoundedScroll } from '../../hooks/useBoundedScroll';

export const ScrollingNav = () => {
  const { scrollYBounded, scrollY } = useBoundedScroll(80);
  const scrollYBoundedProgressDelayed = useTransform(
    scrollYBounded,
    [0, 80],
    [10, -90]
  );
  const toDisplay = useTransform(scrollY, [92, 440], [0, 1]);
  const zIndex = useTransform(scrollY, [92, 440], [0, 33]);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        style={{
          opacity: toDisplay,
          zIndex,
          top: scrollYBoundedProgressDelayed,
        }}
        className=' w-full fixed hidden fr:block '
      >
        <div
          className='w-full max-w-[1440px] px-10 fr:px-10 xl:px-12 ds:px-12 shadow-md py-6 mx-auto flex bg-white bg-opacity-20 backdrop-blur-[9px] items-center justify-between h-fit rounded-[18px] '
          style={{
            color: '#000',
            fill: '#000',
          }}
        >
          <Group key='left'>
            <Link to='/'>
              <img src='/logo.png' alt='logo' className='w-[137px]' />
            </Link>
          </Group>
          <Group key='center'>
            <ul className='flex gap-x-8 items-center text-sm font-medium'>
              <li>
                <Link
                  to='/about-us'
                  className='hover:text-midnight duration-200 transition'
                >
                  About Us
                </Link>
              </li>
              <li>
                <NavLink
                  label='Services'
                  key={'personal'}
                  paths={[
                    {
                      label: 'Accountable PISP',
                      to: '/accountable-pisp',
                    },
                    {
                      label: 'Monthly Bookkeeping',
                      to: '/bookkeeping',
                    },
                    {
                      label: 'Tax Filing & Advisory',
                      to: '/tax',
                    },
                    {
                      label: 'Accountable FMCC',
                      to: '/accountable-fmcc',
                    },
                    {
                      label: 'Catchup Accounting',
                      to: '/catchup-bookkeeping',
                    },
                    {
                      label: 'Retroactive Accounting',
                      to: '/retrospective-bookkeeping',
                    },
                  ]}
                />
              </li>
              <Link
                to='/about-us'
                className='hover:text-midnight duration-200 transition'
              >
                Blog
              </Link>
            </ul>
          </Group>
          <Group key='right'>
            <div className=' flex items-center gap-x-3 text-sm'>
              <Link to='#'>Watch a demo</Link>
              <Link
                to='https://calendar.app.google/Z9JQd7RHr52r4uoC9'
                // dark:bg-[#001b84] dark:text-white
                className='bg-white py-2 px-3 rounded-md font-medium transition duration-200 hover:text-[#313e74] text-[#001b84] '
                target='_blank'
              >
                Talk to an expert
              </Link>
            </div>
          </Group>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
