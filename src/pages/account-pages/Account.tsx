import { useAuth } from '../../providers';

export const AccountPage = () => {
  const { user } = useAuth();
  return (
    <div className='w-full flex flex-col text-[#2C2844]'>
      <h1 className='text-2xl font-semibold pb-6'>Account Overview</h1>
      <div className='w-full flex flex-col gap-y-10'>
        <div className='border-t pt-10'>
          <h4 className='text-xl font-medium'>Account Details</h4>
          <div className=' flex flex-col mt-5 gap-y-[10px]'>
            <span>
              {user.firstname} {user.lastname} ({user.email})
            </span>
            <span>VVIP</span>
            <span>{user.phone_number}</span>
          </div>
        </div>
        <div className='border-t pt-10'>
          <h4 className='text-xl font-medium'>Wallet Credit</h4>
          <div className=' flex flex-col mt-5 gap-y-[10px]'>
            <span>Wallet Balance: 12,000.00</span>
          </div>
        </div>
        <div className='border-t pt-10'>
          <h4 className='text-xl font-medium'>Address</h4>
          <div className=' flex flex-col mt-5 gap-y-[10px]'>
            Your default shipping address:
            <br />
            <span>
              {user.firstname} {user.lastname}
              <br /> 21 Aladekoba Street,
              <br /> Maryland, Ikeja,
              <br /> Lagos +2349700156728 / +2348145782553
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
