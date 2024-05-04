import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../providers';
import { getAddress } from '../../queries/profileQueries';
import toast from 'react-hot-toast';
import Loader from '../../components/Loader';

export const AccountPage = () => {
  const { user } = useAuth();
  const { data, isLoading } = useQuery<{ address: Address }>({
    queryKey: ['address'],
    queryFn: async () => getAddress(),

    ...{
      throwOnError() {
        toast.error('problem with shop');
        return false;
      },
    },
  });
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
            <span>{user.role.title}</span>
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
            {isLoading ? (
              <Loader big />
            ) : (
              <span>
                {user.firstname} {user.lastname}
                {data?.address.address}
                <br /> {data?.address.city}
                <br /> {data?.address.state}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
