/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Group } from '../../../components';
import { AnimatePresence, motion } from 'framer-motion';
import { accordionVariants } from '../../../constants/framer';
import { getFullMoney } from '../../../utils/FormatAmount';
export const OrderAccordion = ({
  order,
  isOpen,
  setIsOpen,
}: {
  order: Order;
  isOpen: boolean;
  setIsOpen: (v: any) => any;
}) => {
  return (
    <div className=' flex flex-col text-xl text-[#2C2844] h-full w-full border rounded-lg px-10 py-[30px]'>
      <Group key='title'>
        <div
          className='hover:cursor-pointer flex max-md:flex-col gap-y-3 gap-x-3 md:justify-between md:items-center w-full'
          onClick={() => setIsOpen(!isOpen ? order.id : null)}
        >
          <div className='flex md:flex-col max-md:w-full max-md:justify-between max-md:items-center gap-y-1'>
            <span className='text-sm md:text-xs font-semibold'>Total</span>
            <span className='text-sm '>{getFullMoney(order.amount)}</span>
          </div>
          <div className='flex md:flex-col max-md:w-full max-md:justify-between max-md:items-center gap-y-1'>
            <span className='text-sm md:text-xs font-semibold'>
              Order Number
            </span>
            <span className='text-sm '>#{order.order_id}</span>
          </div>
          <div className='flex md:flex-col max-md:w-full max-md:justify-between max-md:items-center gap-y-1'>
            <span className='text-sm md:text-xs font-semibold'>Status</span>
            <span className='text-sm uppercase'> {order.status}</span>
          </div>
          <div className='md:hidden mt-10 flex flex-col'>
            <Button label={isOpen ? 'Close' : 'Expand'} />
          </div>
          <span className='w-9 h-9 max-md:hidden rounded-full bg-[#EABEAF] flex items-center justify-center'>
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
            key={order.toString()}
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={accordionVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            // className='flex flex-col mt-6'
          >
            <div className='w-full flex flex-col gap-y-10 text-black/70 text-base pt-5 border-t mt-6'>
              {order.items.map((item) => (
                <div key={item.itemId} className='w-full flex justify-between'>
                  <div className='flex gap-x-2 items-center'>
                    <div className='w-[100px] rounded-lg h-[100px] overflow-clip ml-3'>
                      <img
                        src='https://plus.unsplash.com/premium_photo-1661597206779-b6643eac8213?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        className='object-cover w-full'
                      />
                    </div>
                    <div className='flex flex-col '>
                      <span>{item.name}</span>
                      {/* <span>{item.name}</span> */}
                      <span className='text-sm'>Qty:{item.quantity}</span>
                    </div>
                  </div>
                  <span className='text-sm'>{getFullMoney(item.price)}</span>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};
