/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from 'react-router-dom';
import { Button, Group, TextInput } from '../components';
import { useCart } from '../providers';
import { getFullMoney } from '../utils/FormatAmount';

export const BagPage = () => {
  const navigate = useNavigate();
  const { cart, removeItemFromCart, addItemtoCart } = useCart();
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleAdd = (data: any) => {
    addItemtoCart.add({
      itemId: data.itemId,
      quantity: data.quantity,
      price: data.price,
      name: data.name,
    });
  };
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
            <span className='text-2xl md:text-[64px] font-semibold text-[#2C2844]'>
              Bag
            </span>
          </button>
        </Group>

        {cart.items?.length > 0 ? (
          <Group key='with items'>
            <section
              aria-label='item section'
              className='rounded-lg mt-10 md:mt-12 pb-10'
            >
              <table className='hidden md:table w-full' cellPadding={16}>
                <thead className='text-[#2C2844] text-2xl font-medium border-b'>
                  <tr>
                    <th align='left' colSpan={1} className='font-medium'>
                      Product
                    </th>
                    <th align='center' className='font-medium'>
                      Price
                    </th>
                    <th align='right' className='font-medium'>
                      Quantity
                    </th>
                    <th align='right' className='font-medium'>
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody className='w-full'>
                  {cart.items?.map((it) => (
                    <tr key={it.itemId}>
                      <td
                        align='left'
                        className='flex items-center'
                        colSpan={8}
                      >
                        <button
                          onClick={() =>
                            removeItemFromCart.remove(
                              it.itemId,
                              it.price * it.quantity
                            )
                          }
                        >
                          <svg
                            width='20'
                            height='21'
                            viewBox='0 0 20 21'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M10.8887 10.3575L17.627 17.1056L16.748 17.9845L10 11.2462L3.25195 17.9845L2.37305 17.1056L9.11133 10.3575L2.37305 3.6095L3.25195 2.73059L10 9.46887L16.748 2.73059L17.627 3.6095L10.8887 10.3575Z'
                              fill='black'
                            />
                          </svg>
                        </button>
                        <div className='w-[100px] rounded-lg h-[100px] overflow-clip ml-3'>
                          <img
                            src='https://plus.unsplash.com/premium_photo-1661597206779-b6643eac8213?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            className='object-cover w-full'
                          />
                        </div>
                        <span className='ml-6'>{it.name}</span>
                      </td>
                      <td align='center' className='font-medium'>
                        {getFullMoney(it.price)}
                      </td>
                      <td align='right'>
                        Qty:{' '}
                        <select
                          className='outline-none'
                          onChange={(e) => {
                            handleAdd({ ...it, quantity: e.target.value });
                          }}
                        >
                          <option disabled>Qty</option>
                          {quantities.map((qty) => (
                            <option selected={qty == it.quantity} value={qty}>
                              {qty}
                            </option>
                          ))}
                        </select>{' '}
                        {/* {it.quantity} */}
                      </td>
                      <td align='right' className='font-medium'>
                        {getFullMoney(it.price * it.quantity)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Group key='promo'>
                <div className='flex flex-col mt-10 max-w-[560px]'>
                  <h5 className='text-xl font-medium'>Promo Code</h5>
                  <div className='flex items-center gap-x-9 mt-4 w-full'>
                    <div className='flex-1'>
                      <TextInput
                        name='promo'
                        readOnly
                        value=''
                        placeholder='Enter Promo Code'
                      />
                    </div>
                    <div className='w-[150px]'>
                      <Button label='Apply' {...{ style: { width: '100%' } }} />
                    </div>
                  </div>
                </div>
              </Group>
              <Group key='total'>
                <div className='mt-20 flex flex-col max-w-[804px] w-full'>
                  <h3 className='text-2xl font-semibold'>Bag Total</h3>
                  <div className='flex items-center w-full justify-between mt-8'>
                    <span className=' text-lg '>Subtotal</span>
                    <span>{getFullMoney(Number(cart.bill))}</span>
                  </div>
                  <div className='border-t border-b border-[#00000080] border-dashed mt-6 py-5 flex flex-col gap-y-5'>
                    <div className='flex items-center w-full justify-between '>
                      <span className=' text-sm '>Discount</span>
                      <span> </span>
                    </div>
                    <div className='flex items-center w-full justify-between '>
                      <span className=' text-sm '>Promo Code</span>
                      <span> </span>
                    </div>
                    <div className='flex items-center w-full justify-between '>
                      <span className=' text-sm '>Amount</span>
                      <span> </span>
                    </div>
                  </div>
                  <div className='flex items-center w-full justify-between mt-8'>
                    <span className=' text-lg '>Total</span>
                    <span>{getFullMoney(Number(cart.bill))}</span>
                  </div>
                </div>
              </Group>
              <Link
                to='/checkout'
                className='text-white font-semibold bg-[#EABEAF] text-xl rounded block mt-8 px-6 py-3 md:mt-[120px] max-w-[401px] text-center mx-auto'
              >
                Proceed To Checkout
              </Link>
            </section>
          </Group>
        ) : (
          <Group key='empty wishlist'>
            <div className='w-full flex flex-col items-center justify-center max-md:pb-[96px] pt-[96px]'>
              <img src='/emptycart.svg' alt='empty wishlist' />
              <div className='mt-10 md:mt-[72px] flex flex-col items-center gap-y-5 text-center'>
                <h2 className='text-xl'>Your bag is empty</h2>
                <span className='text-black/70'>
                  Items remain in your bag for 60 minutes, and then they are
                  moved to your wishlist. Sign in to keep items in your bag for
                  longer periods.
                </span>
              </div>
              <Link
                to='/shop'
                className='text-white font-semibold bg-[#EABEAF] rounded block mt-8 px-6 py-3 md:mt-[60px]'
              >
                Go shopping
              </Link>
            </div>
          </Group>
        )}
      </div>
    </div>
  );
};
