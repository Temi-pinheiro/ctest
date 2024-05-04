/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from '../providers';
import { Group } from '../components';
import { getWishlist } from '../queries/productQueries';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Loader from '../components/Loader';
import { WishlistItem } from './components';

export const WishlistPage = () => {
  const navigate = useNavigate();
  const { data: wishlist, isLoading } = useQuery<{
    items: { id: number; product: Product }[];
  }>({
    queryKey: ['wishlist'],
    queryFn: async () => {
      try {
        const data = await getWishlist();
        return data;
      } catch (err: any) {
        toast.error(err.message);
        throw err;
      }
    },
    ...{ throwOnError: false },
  });

  return (
    <div className='flex md:min-h-screen flex-col pt-20'>
      {isLoading ? (
        <Loader big />
      ) : (
        <div className='max-w-[1440px] px-6 fr:px-10 xl:px-12 ds:px-20 mx-auto flex flex-col w-full md:mt-12'>
          <Group key='go back'>
            <button
              onClick={() => navigate(-1)}
              className='flex items-center gap-x-5'
            >
              <svg
                width='24'
                height='25'
                viewBox='0 0 24 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.25 11.75H20.25C20.4489 11.75 20.6397 11.829 20.7803 11.9697C20.921 12.1103 21 12.3011 21 12.5C21 12.6989 20.921 12.8897 20.7803 13.0303C20.6397 13.171 20.4489 13.25 20.25 13.25H5.25C5.05109 13.25 4.86032 13.171 4.71967 13.0303C4.57902 12.8897 4.5 12.6989 4.5 12.5C4.5 12.3011 4.57902 12.1103 4.71967 11.9697C4.86032 11.829 5.05109 11.75 5.25 11.75Z'
                  fill='#2C2844'
                />
                <path
                  d='M5.56038 12.5L11.7809 18.719C11.9217 18.8598 12.0008 19.0508 12.0008 19.25C12.0008 19.4491 11.9217 19.6401 11.7809 19.781C11.64 19.9218 11.449 20.0009 11.2499 20.0009C11.0507 20.0009 10.8597 19.9218 10.7189 19.781L3.96888 13.031C3.89903 12.9613 3.84362 12.8785 3.80581 12.7874C3.768 12.6963 3.74854 12.5986 3.74854 12.5C3.74854 12.4013 3.768 12.3036 3.80581 12.2125C3.84362 12.1214 3.89903 12.0386 3.96888 11.969L10.7189 5.21897C10.8597 5.07814 11.0507 4.99902 11.2499 4.99902C11.449 4.99902 11.64 5.07814 11.7809 5.21897C11.9217 5.3598 12.0008 5.55081 12.0008 5.74997C12.0008 5.94913 11.9217 6.14014 11.7809 6.28097L5.56038 12.5Z'
                  fill='#2C2844'
                />
              </svg>
              <span className='text-2xl md:text-[40px] font-semibold text-[#2C2844]'>
                Wishlist
              </span>
            </button>
          </Group>

          {wishlist?.items && wishlist.items.length > 0 ? (
            <Group key='with items'>
              <section
                aria-label='item section'
                className='rounded-lg mt-10 md:mt-12'
              >
                <table className='hidden md:table w-full' cellPadding={16}>
                  <thead className='text-[#2C2844] text-2xl font-medium border-b'>
                    <tr>
                      <th align='left' className='font-medium w-[50%]'>
                        Product
                      </th>
                      <th align='center' className='font-medium'>
                        Availability
                      </th>
                      <th align='center' className='font-medium'>
                        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                        &nbsp;
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlist.items.map((item) => (
                      <WishlistItem key={item.id} item={item} />
                    ))}
                  </tbody>
                </table>
                <div className='w-full mt-[120px] flex items-center justify-center gap-x-10'>
                  <button className='rounded border bg-[] px-[30px] py-[15px] text-xl font-medium text-[#2C2844] border-[#2C2844]'>
                    Remove All
                  </button>
                  <button className='rounded border bg-[#EABEAF] px-[30px] py-[15px] text-xl font-medium text-[#fff] border-transparent'>
                    Add All to Bag
                  </button>
                </div>
              </section>
            </Group>
          ) : (
            <Group key='empty wishlist'>
              <div className='w-full flex flex-col items-center justify-center max-md:pb-[96px] pt-[96px]'>
                <img src='/emptywishlist.svg' alt='empty wishlist' />
                <div className='mt-10 md:mt-[72px] flex flex-col items-center gap-y-5 text-center'>
                  <h2 className='text-xl'>Your Wishlist is empty !</h2>
                  <span className='text-black/70'>
                    You have not added any items to your wishlist
                  </span>
                </div>
                <Link
                  to='/shop'
                  className='text-white font-semibold bg-[#EABEAF] rounded block mt-8 px-6 py-3 md:mt-[60px]'
                >
                  Back To Shop
                </Link>
              </div>
            </Group>
          )}
        </div>
      )}
    </div>
  );
};
