import { useAuth } from '../../providers';

export const ProfilePage = () => {
  const { user } = useAuth();
  return (
    <div className='w-full flex flex-col text-[#2C2844]'>
      <h1 className='text-2xl font-semibold pb-6'>Profile</h1>
      <div className='w-full flex flex-col gap-y-10'>
        <div className='border-t pt-10'>
          <h4 className='text-xl font-medium'>Personal Details</h4>
          <div className=' flex flex-col mt-5 gap-y-[10px]'>
            <span>
              {user.firstname} {user.lastname} ({user.email})
            </span>
            <span>{user.role.title}</span>
            <span>{user.phone_number}</span>
          </div>
        </div>
        <div className='border-t pt-10'>
          <h4 className='text-xl font-medium'>Password</h4>
          <div className=' flex flex-col mt-5 gap-y-[10px]'>
            <span>*******</span>
          </div>
        </div>
        <div className='border-t pt-10'>
          <h4 className='text-xl font-medium'>Billing Addreess</h4>
          <div className=' flex flex-col mt-5 gap-y-[10px]'>
            <span>
              21 Aladekoba Street,
              <br /> Maryland, Ikeja,
              <br /> Lagos +2349700156728 / +2348145782553
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
