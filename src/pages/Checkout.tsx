/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from 'react-router-dom';
import { Group, SelectElement, TextInput } from '../components';
import { openModal, useAuth, useCart } from '../providers';
import { getFullMoney } from '../utils/FormatAmount';
import { AuthModal } from '../actions';
import { useForm } from '../hooks';
import { makeGuestPayment, makePayment } from '../mutations/cartMutations';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';
import { useCities, useCountries, useStates } from '../hooks/useData';
import { getAddress } from '../queries/profileQueries';
import { useEffect, useState } from 'react';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [agreed, setAgreed] = useState(false);

  const [email, setEmail] = useState('');
  const { isAuthenticated, user } = useAuth();
  const popup = openModal();
  const { formData, update, setData } = useForm({
    initial: {
      phone_number: '',
      first_name: '',
      last_name: '',
      save_future: 'true',
      country: '',
      state: '',
      city: '',
      address1: '',
      address2: '',
      post_code: '',
    },
  });
  const { data, isLoading } = useQuery<{ address: Address }>({
    enabled: isAuthenticated,
    queryKey: ['address'],
    queryFn: async () => {
      try {
        const data = await getAddress();
        setData({
          phone_number: user?.phone_number,
          first_name: data.address.first_name,
          last_name: data.address.last_name,
          save_future: 'true',
          country: data.address.country,
          state: data.address.state,
          city: data.address.city,
          address1: data.address.address,
          address2: '',
          post_code: data.address.post_code,
        });
        return data;
      } catch (error: any) {
        toast.error(error?.message);
      }
    },
  });

  const { list: Countries } = useCountries();
  const { list: States } = useStates(formData.country);
  const { list: Cities } = useCities(formData.country, formData.state);
  const { mutate: guestCheckout, isPending: checking } = useMutation({
    mutationFn: () =>
      makeGuestPayment({
        phone_number: formData?.phone_number,
        first_name: formData.first_name,
        last_name: formData.last_name,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        address1: formData.address1,
        address2: formData.address2,
        post_code: formData.post_code,
        newsletter_sub: agreed,
        email,
        items: [...cart.items],
        amount: cart.bill,
      }),
    ...{
      onSuccess(data: any) {
        window.open(data.authorization_url, 'self');
      },
      onError(err) {
        toast.error(err?.message);
      },
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      makePayment({ ...formData, items: [...cart.items], amount: cart.bill }),
    ...{
      onSuccess(data: any) {
        window.open(data.authorization_url, 'self');
      },
      onError(err) {
        toast.error(err?.message);
      },
    },
  });

  const handleCheckout = (e: any) => {
    e.preventDefault();
    isAuthenticated ? mutate() : guestCheckout();
  };

  useEffect(() => {}, [data]);
  return isLoading ? (
    <div className='h-screen flex items-center'>
      <Loader big />
    </div>
  ) : cart.items?.length > 0 ? (
    <form
      onSubmit={handleCheckout}
      className='flex md:min-h-screen flex-col pt-20'
    >
      <div className='max-w-[1440px] px-6 fr:px-10 xl:px-12 ds:px-20 mx-auto flex flex-col w-full md:mt-12 max-md:pb-10'>
        <div className='flex max-md:flex-col gap-y-5 md:items-center w-full '>
          <Group key='go back'>
            <button
              onClick={() => navigate('/bag')}
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
              <span className=' text-[#2C2844]'>Return To Bag</span>
            </button>
          </Group>
          <h1 className='text-[#2C2844] text-2xl font-medium mx-auto uppercase'>
            Checkout
          </h1>
        </div>
        <div className='flex max-md:flex-col md:justify-between items-start w-full h-full mt-10 md:mt-[102px] gap-x-[109px]'>
          <Group key='info'>
            <div className='flex flex-col w-full gap-y-10'>
              <div className='flex flex-col '>
                <h2 className='text-xl font-medium'>Customer Information</h2>
                {!isAuthenticated && (
                  <span className='text-[#000000B2]'>
                    Already have an account?{' '}
                    <button
                      onClick={() => popup({ component: <AuthModal /> })}
                      className='underline text-[#2046A6]'
                    >
                      Login Here
                    </button>
                  </span>
                )}
                {isAuthenticated ? (
                  <div className=' flex flex-col mt-5 gap-y-[10px]'>
                    <span>
                      {user.firstname} {user.lastname} ({user.email})
                    </span>
                    <span>VVIP</span>
                    <span>{user.phone_number}</span>
                  </div>
                ) : (
                  <div className='flex flex-col gap-y-5 mt-5 max-w-[510px]'>
                    <TextInput
                      label='Email'
                      value={email}
                      name='email'
                      handleInputChange={(e) => setEmail(e.target.value)}
                    />
                    <TextInput
                      label='Phone Number'
                      value={formData.phone_number}
                      name='phone_number'
                      handleInputChange={update}
                    />
                    <div className='flex items-center gap-x-2 w-full mt-6'>
                      <input
                        type='checkbox'
                        onChange={(e) => setAgreed(e.target.checked)}
                        className='h-4 w-4 bg-white/10 block accent-white/10'
                      />
                      <label className='text-sm'>
                        By ticking this, you agree to receive our newsletter as
                        emails.
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <div className='flex flex-col'>
                <h2 className='text-xl font-medium'>Delivery Information</h2>
                <div className='flex flex-col max-w-[510px] w-full gap-y-5 mt-8'>
                  <div className='grid gap-y-5 md:grid-cols-2 gap-x-10'>
                    <TextInput
                      label='First name'
                      value={formData.first_name}
                      required
                      name='first_name'
                      handleInputChange={update}
                    />
                    <TextInput
                      label='Last name'
                      value={formData.last_name}
                      required
                      name='last_name'
                      handleInputChange={update}
                    />
                  </div>
                  <div className='grid gap-y-5 md:grid-cols-2 gap-x-10'>
                    <SelectElement
                      placeholder='Select Country'
                      label='Country / Region'
                      required
                      value={formData.country}
                      name='country'
                      options={Countries}
                      onChange={update}
                    />
                    <SelectElement
                      placeholder='Select State'
                      label='State'
                      value={formData.state}
                      required
                      name='state'
                      options={States}
                      onChange={update}
                    />
                  </div>
                  <TextInput
                    label='Address line 1'
                    value={formData.address1}
                    required
                    name='address1'
                    placeholder='House number & street name'
                    handleInputChange={update}
                  />
                  <TextInput
                    label='Address line 2'
                    value={formData.address2}
                    name='address2'
                    placeholder='Area, Estate, LGA'
                    handleInputChange={update}
                  />
                  <div className='grid gap-y-5 md:grid-cols-2 gap-x-10'>
                    <TextInput
                      label='Postcode/ZIP'
                      value={formData.post_code}
                      required
                      name='post_code'
                      handleInputChange={update}
                    />
                    <SelectElement
                      placeholder='Select City'
                      required
                      label='City'
                      value={formData.city}
                      name='city'
                      options={Cities}
                      onChange={update}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Group>
          <Group key='summary'>
            <div className='rounded-xl flex flex-col md:max-w-[333px] w-full max-md:mt-10'>
              <div className='flex flex-col bg-[#2C28440D] p-5 rounded-t-xl'>
                <h3 className='text-xl font-semibold border-b pb-4'>
                  Order summary
                </h3>
                <div className='flex flex-col w-full mt-5'>
                  {cart.items.map((it) => (
                    <Item key={it.itemId} item={it} />
                  ))}
                </div>
                <div className='border-t border-b py-5 flex flex-col gap-y-5'>
                  <div className='flex items-center w-full justify-between'>
                    <span className='font-light text-sm'>Subtotal</span>
                    <span>{getFullMoney(Number(cart.bill))}</span>
                  </div>
                  {/* <div className='flex items-center w-full justify-between'>
                    <span className='font-light text-sm'>Discount</span>
                    <span>N/A</span>
                  </div>
                  <div className='flex items-center w-full justify-between'>
                    <span className='font-light text-sm'>Shipping</span>
                    <span>-</span>
                  </div> */}
                </div>
                <div className='pt-5'>
                  <div className='flex items-center w-full justify-between'>
                    <span className='font-light text-sm'>Total</span>
                    <span className='font-medium'>
                      {getFullMoney(Number(cart.bill))}
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-center bg-[#ECECEC] p-5 rounded-b-xl'>
                <button
                  type='submit'
                  disabled={isPending || checking}
                  className='w-full bg-[#EABEAF] text-white font-bold py-[10px] leading-[28px] rounded-lg flex justify-center'
                >
                  {isPending || checking ? (
                    <Loader bgColor='#fff' />
                  ) : (
                    'Place Order'
                  )}
                </button>
              </div>
            </div>
          </Group>
        </div>
      </div>
    </form>
  ) : (
    <Group key='empty wishlist'>
      <div className='w-full flex flex-col items-center justify-center max-md:pb-[96px] pt-[96px]'>
        <img src='/emptycart.svg' alt='empty wishlist' />
        <div className='mt-10 md:mt-[72px] flex flex-col items-center gap-y-5 text-center'>
          <h2 className='text-xl'>Your bag is empty</h2>
          <span className='text-black/70'>
            Items remain in your bag for 60 minutes, and then they are moved to
            your wishlist. Sign in to keep items in your bag for longer periods.
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
  );
};

const Item = ({ item }: { item: Cart['items'][0] }) => {
  return (
    <div className=' pb-5 flex items-center gap-x-5 relative w-full'>
      <div className='w-[100px] rounded-lg h-[100px] overflow-clip'>
        <img
          src='https://plus.unsplash.com/premium_photo-1661597206779-b6643eac8213?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='object-cover w-full'
        />
      </div>
      <div className='flex flex-col w-full'>
        <h3 className='text-sm text-[#2C2844] font-medium'>{item.name}</h3>
        <span className='text-xs text-black/50 block'>
          Extra product details
        </span>
        <div className='w-full flex items-center justify-between mt-2'>
          <span className='text-xs text-black/50'>Qty: {item.quantity}</span>
          <span className='text-sm block font-semibold text-black'>
            {getFullMoney(item.price)}
          </span>
        </div>
      </div>
    </div>
  );
};
