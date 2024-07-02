/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from 'framer-motion';
import { Group } from '../Group';
import { accordionVariants } from '../../constants/framer';
export const FaqAccordion = ({
  title,
  answer,
  isOpen,
  setIsOpen,
}: {
  title: string;
  answer: string;
  isOpen: boolean;
  setIsOpen: (v: any) => any;
}) => {
  return (
    <div className=' flex flex-col text-xl text-[#2C2844] h-full w-full border rounded-lg px-10 py-[30px]'>
      <Group key='title'>
        <div
          className='hover:cursor-pointer flex gap-x-3 justify-between items-center w-full'
          onClick={() => setIsOpen(!isOpen ? title : null)}
        >
          <h1 className='font-semibold md:text-xl text-2xl'>{title}</h1>
          <span className='w-9 h-9 rounded-full bg-[#EABEAF] flex items-center justify-center'>
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
                fill='#fff'
              />
            </motion.svg>
          </span>
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
            <p className='w-full flex flex-col gap-y-5 text-black/70 text-base md:text-xl pt-5'>
              {answer}
            </p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};
