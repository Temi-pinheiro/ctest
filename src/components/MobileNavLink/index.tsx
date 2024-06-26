/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect } from 'react';
import { Group } from '..';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { accordionVariants } from '../../constants/framer';
export const MobileNavLink = ({
  paths,
  title,
  isOpen,
  setIsOpen,
}: {
  paths: {
    label: string;
    to: string;
    show: boolean;
  }[];
  title: string;
  isOpen: boolean;
  smaller?: boolean;
  setIsOpen: (v: any) => any;
}) => {
  const { pathname } = useLocation();
  // const [isOpen, setIsOpen] = useState(activeTab == title);
  const checkIfActive = () => {
    const checkList = paths.map((path) => path.to);
    return checkList.includes(pathname);
  };
  useEffect(() => {
    checkIfActive() && setIsOpen(title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <div className='flex flex-col relative py-5 text-black'>
      <Group key='title'>
        <div
          className='hover:cursor-pointer flex gap-x-3 justify-between items-center relative px-5'
          onClick={() => setIsOpen(!isOpen ? title : null)}
        >
          <h1>{title}</h1>

          <motion.svg
            width='12'
            height='8'
            viewBox='0 0 12 8'
            animate={{ rotateZ: isOpen ? 180 : 0 }}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976306 1.81658 -0.0976305 1.18342 0.292893 0.792893C0.683417 0.402368 1.31658 0.402368 1.70711 0.792893L6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893Z'
              fill='black'
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
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            // className='flex flex-col mt-6'
          >
            <div className=' text-lg flex flex-col gap-y-6 pt-[30px]'>
              {paths
                .filter((p) => p.show)
                .map((path, index) => (
                  <Link
                    to={path.to}
                    className='flex items-center w-full justify-between relative px-5'
                    style={{
                      fontWeight: pathname == path.to ? 'bold' : 'normal',
                    }}
                    key={index}
                  >
                    {path.label}
                  </Link>
                ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};
