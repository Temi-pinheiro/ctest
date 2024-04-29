/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { Group, TextInput } from '../components';
import { openModal, useAuth, useCart } from '../providers';
import { getFullMoney } from '../utils/FormatAmount';
import { AuthModal } from '../actions';
import { useForm } from '../hooks';
import { makePayment } from '../mutations/cartMutations';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const popup = openModal();
  const { formData, update } = useForm({
    initial: {
      //   email: '',
      phone_number: user?.phone_number,
      first_name: '',
      last_name: '',
      save_future: 'true',
      country: 'Nigeria',
      city: '',
      address1: '',
      address2: '',
      post_code: '',
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      makePayment({ ...formData, items: [...cart.items], amount: cart.bill }),
    ...{
      onSuccess(data: any) {
        window.open(data.authorization_url, 'self');
      },
      throwOnError() {
        toast.error('problem with payment');
        return false;
      },
    },
  });

  const handleCheckout = (e: any) => {
    e.preventDefault();
    mutate();
  };
  return (
    <div className='flex md:min-h-screen flex-col pt-20'>
      <div className='max-w-[1440px] px-6 fr:px-10 xl:px-12 ds:px-20 mx-auto flex flex-col w-full md:mt-12'>
        <div className='flex items-center w-full '>
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
        <div className='flex justify-between items-start w-full h-full mt-[102px] gap-x-[109px]'>
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
                <div className='flex flex-col mt-5 max-w-[510px]'>
                  {/* <TextInput
                    label='Email'
                    value={formData.email}
                    name='email'
                    handleInputChange={update}
                  /> */}
                  <TextInput
                    label='Phone Number'
                    value={formData.phone_number}
                    name='phone_number'
                    handleInputChange={update}
                  />
                </div>
              )}
            </div>
            <div className='flex flex-col'>
              <h2 className='text-xl font-medium'>Delivery</h2>
              <div className='flex flex-col max-w-[510px] w-full gap-y-5 mt-8'>
                <div className='grid grid-cols-2 gap-x-10'>
                  <TextInput
                    label='First name'
                    value={formData.first_name}
                    name='first_name'
                    handleInputChange={update}
                  />
                  <TextInput
                    label='Last name'
                    value={formData.last_name}
                    name='last_name'
                    handleInputChange={update}
                  />
                </div>
                <TextInput
                  label='Country / Region'
                  value='Nigeria'
                  readOnly
                  name='country'
                  handleInputChange={update}
                />
                <TextInput
                  label='Address line 1'
                  value={formData.address1}
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
                <div className='grid grid-cols-2 gap-x-10'>
                  <TextInput
                    label='Postcode/ZIP'
                    value={formData.post_code}
                    name='post_code'
                    handleInputChange={update}
                  />
                  <TextInput
                    label='City'
                    value={formData.city}
                    name='city'
                    handleInputChange={update}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-xl flex flex-col max-w-[333px] w-full'>
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
                <div className='flex items-center w-full justify-between'>
                  <span className='font-light text-sm'>Discount</span>
                  <span>N/A</span>
                </div>
                <div className='flex items-center w-full justify-between'>
                  <span className='font-light text-sm'>Shipping</span>
                  <span>-</span>
                </div>
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
                onClick={handleCheckout}
                className='w-full bg-[#EABEAF] text-white font-bold py-[10px] leading-[28px] rounded-lg flex justify-center'
              >
                {isPending ? <Loader bgColor='#fff' /> : 'Place Order'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
