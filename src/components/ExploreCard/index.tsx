/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Group } from '../Group';
import { fadeIn } from '../../constants/framer';
import { Link } from 'react-router-dom';
import { getFullMoney } from '../../utils/FormatAmount';
import { useCart } from '../../providers';
import Loader from '../Loader';
import { addToWishlist } from '../../mutations/productMutations';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const ExploreCard = ({ data }: { data: Product }) => {
  const [showAdd, setShowAdd] = useState(false);
  const qc = useQueryClient();
  const { addItemtoCart } = useCart();

  const handleAdd = () => {
    addItemtoCart.add({
      itemId: data.id,
      quantity: 1,
      price: data.amount,

      name: data.name,
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: () => addToWishlist({ product_id: data.id }),
    ...{
      onSuccess() {
        toast.success('Item added to wishlist');
        qc.invalidateQueries({ queryKey: ['wishlist'] });
      },
      onError(err) {
        toast.error(err?.message);

        return false;
      },
    },
  });
  return (
    <div
      onMouseEnter={() => setShowAdd(true)}
      onMouseLeave={() => setShowAdd(false)}
      className='flex flex-col w-full pb-2 rounded-lg max-w-[413px]'
    >
      <Group key='image'>
        <div className='relative rounded-lg h-[300px] overflow-clip shrink-0'>
          <Group key='background'>
            <img
              // src={data.image[0]}
              src='https://plus.unsplash.com/premium_photo-1661597206779-b6643eac8213?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              className='object-cover w-full h-full'
              alt={data.name}
            />
            <button
              onClick={() => mutate()}
              disabled={isPending}
              className='absolute w-[30px] z-[20] h-[30px] rounded-full bg-[#F5F5F5] hover:fill-[#F47175] flex items-center justify-center top-3 right-3'
            >
              {isPending ? (
                <Loader bgColor='#F47175' />
              ) : (
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='inherit'
                  className='transition-colors duration-200 ease-in-out'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.00001 14.4331C7.79334 14.4331 7.59334 14.4064 7.42668 14.3464C4.88001 13.4731 0.833344 10.3731 0.833344 5.79307C0.833344 3.45974 2.72001 1.56641 5.04001 1.56641C6.16668 1.56641 7.22001 2.00641 8.00001 2.79307C8.78001 2.00641 9.83334 1.56641 10.96 1.56641C13.28 1.56641 15.1667 3.46641 15.1667 5.79307C15.1667 10.3797 11.12 13.4731 8.57334 14.3464C8.40668 14.4064 8.20668 14.4331 8.00001 14.4331ZM5.04001 2.56641C3.27334 2.56641 1.83334 4.01307 1.83334 5.79307C1.83334 10.3464 6.21334 12.8797 7.75334 13.4064C7.87334 13.4464 8.13334 13.4464 8.25334 13.4064C9.78668 12.8797 14.1733 10.3531 14.1733 5.79307C14.1733 4.01307 12.7333 2.56641 10.9667 2.56641C9.95334 2.56641 9.01334 3.03974 8.40668 3.85974C8.22001 4.11307 7.79334 4.11307 7.60668 3.85974C6.98668 3.03307 6.05334 2.56641 5.04001 2.56641Z'
                    fill='#1D1D1D'
                    stroke='#263238'
                    strokeWidth='0.3'
                  />
                </svg>
              )}
            </button>
          </Group>
          <Group key='add to cart'>
            <AnimatePresence>
              {showAdd ? (
                <motion.div
                  variants={fadeIn}
                  animate='animate'
                  exit='exit'
                  initial='initial'
                  className='absolute inset-0 w-full h-full flex items-center justify-center bg-[#1D1D1D]/[70%] rounded-t-[3px]'
                >
                  <button
                    onClick={handleAdd}
                    disabled={addItemtoCart.adding(data.id)}
                    className='bg-[#1D1D1D] rounded-full flex items-center gap-x-[9px] text-xs text-white font-semibold p-3'
                  >
                    {addItemtoCart.adding(data.id) ? (
                      <Loader />
                    ) : (
                      <span>Add to cart</span>
                    )}
                  </button>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </Group>
        </div>
      </Group>

      <div className='flex flex-col justify-between w-full mt-5'>
        <span className='flex items-center w-full justify-between'>
          <Link className='hover:underline' to={`/shop/${data.id.toString()}`}>
            {data.name}
          </Link>
          <span className='text-black/50 text-xs'>0 reviews</span>
        </span>
        <span className='text-black/70'>{getFullMoney(data.amount)}</span>
      </div>
    </div>
  );
};
