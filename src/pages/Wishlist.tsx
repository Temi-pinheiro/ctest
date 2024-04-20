import { useNavigate } from 'react-router-dom';
// import { useCart } from '../providers';
import { Group } from '../components';

export const WishlistPage = () => {
  const navigate = useNavigate();
  // const { cart } = useCart();
  const items = [
    {
      name: 'VA Black',
      price: '12,000.00',
      image:
        'https://images.unsplash.com/photo-1617825295690-28ae56c56135?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      available: true,
    },
    {
      name: 'VA Large Box of 6',
      price: '32,000.00',
      image:
        'https://images.unsplash.com/photo-1617825295690-28ae56c56135?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      available: false,
    },
    {
      name: 'VA Black - Satchet',
      price: '6,400.00',
      image:
        'https://images.unsplash.com/photo-1617825295690-28ae56c56135?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      available: true,
    },
  ];
  return (
    <div className='flex md:min-h-screen flex-col pt-20'>
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
                  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr className='bordr-b'>
                  <td className='py-10'>
                    <span className='flex items-center gap-x-10'>
                      <img
                        src={item.image}
                        className='w-[180px] h-[125px] rounded-md object-cover'
                      />
                      <section className='flex flex-col gap-y-[30px] text-[#2C2844]'>
                        <span className='font-medium text-2xl'>
                          {item.name}
                        </span>
                        <span>{item.price}</span>
                      </section>
                    </span>
                  </td>
                  <td className='text-xl py-10' align='center'>
                    {item.available ? (
                      <span className='text-[#5CB85C] font-medium'>
                        In Stock
                      </span>
                    ) : (
                      <span className='text-[#FF0F0F] font-medium'>
                        Out Of Stock
                      </span>
                    )}
                  </td>

                  <td align='right' className='py-10'>
                    <span className='flex items-center gap-x-10 w-fit'>
                      <button className='rounded border bg-[#EABEAF] px-5 py-3 text-xl font-medium text-[#fff] border-transparent'>
                        Add to bag
                      </button>
                      <button>
                        <svg
                          width='37'
                          height='36'
                          viewBox='0 0 37 36'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M15.3384 7.5H21.3384C21.3384 6.70435 21.0223 5.94129 20.4597 5.37868C19.8971 4.81607 19.134 4.5 18.3384 4.5C17.5427 4.5 16.7797 4.81607 16.2171 5.37868C15.6545 5.94129 15.3384 6.70435 15.3384 7.5ZM13.0884 7.5C13.0884 6.81056 13.2242 6.12787 13.488 5.49091C13.7518 4.85395 14.1386 4.2752 14.6261 3.78769C15.1136 3.30018 15.6923 2.91347 16.3293 2.64963C16.9663 2.3858 17.6489 2.25 18.3384 2.25C19.0278 2.25 19.7105 2.3858 20.3475 2.64963C20.9844 2.91347 21.5632 3.30018 22.0507 3.78769C22.5382 4.2752 22.9249 4.85395 23.1887 5.49091C23.4526 6.12787 23.5884 6.81056 23.5884 7.5H32.2134C32.5117 7.5 32.7979 7.61853 33.0089 7.8295C33.2199 8.04048 33.3384 8.32663 33.3384 8.625C33.3384 8.92337 33.2199 9.20952 33.0089 9.4205C32.7979 9.63147 32.5117 9.75 32.2134 9.75H30.2334L28.4784 27.9165C28.3438 29.3085 27.6954 30.6004 26.6599 31.5402C25.6244 32.4801 24.2758 33.0005 22.8774 33H13.7994C12.4012 33.0002 11.053 32.4796 10.0178 31.5397C8.98258 30.5999 8.33448 29.3082 8.19988 27.9165L6.44338 9.75H4.46338C4.16501 9.75 3.87886 9.63147 3.66788 9.4205C3.45691 9.20952 3.33838 8.92337 3.33838 8.625C3.33838 8.32663 3.45691 8.04048 3.66788 7.8295C3.87886 7.61853 4.16501 7.5 4.46338 7.5H13.0884ZM16.0884 14.625C16.0884 14.3266 15.9699 14.0405 15.7589 13.8295C15.5479 13.6185 15.2617 13.5 14.9634 13.5C14.665 13.5 14.3789 13.6185 14.1679 13.8295C13.9569 14.0405 13.8384 14.3266 13.8384 14.625V25.875C13.8384 26.1734 13.9569 26.4595 14.1679 26.6705C14.3789 26.8815 14.665 27 14.9634 27C15.2617 27 15.5479 26.8815 15.7589 26.6705C15.9699 26.4595 16.0884 26.1734 16.0884 25.875V14.625ZM21.7134 13.5C22.0117 13.5 22.2979 13.6185 22.5089 13.8295C22.7199 14.0405 22.8384 14.3266 22.8384 14.625V25.875C22.8384 26.1734 22.7199 26.4595 22.5089 26.6705C22.2979 26.8815 22.0117 27 21.7134 27C21.415 27 21.1289 26.8815 20.9179 26.6705C20.7069 26.4595 20.5884 26.1734 20.5884 25.875V14.625C20.5884 14.3266 20.7069 14.0405 20.9179 13.8295C21.1289 13.6185 21.415 13.5 21.7134 13.5ZM10.4394 27.7005C10.5203 28.5355 10.9092 29.3104 11.5304 29.8742C12.1516 30.4379 12.9605 30.7502 13.7994 30.75H22.8774C23.7163 30.7502 24.5251 30.4379 25.1463 29.8742C25.7675 29.3104 26.1565 28.5355 26.2374 27.7005L27.9744 9.75H8.70238L10.4394 27.7005Z'
                            fill='black'
                          />
                        </svg>
                      </button>
                    </span>
                  </td>
                </tr>
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
        {/* {cart.wishList?.length > 0 ? (
          <Group key='with items'>
            <div></div>
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
        )} */}
      </div>
    </div>
  );
};
