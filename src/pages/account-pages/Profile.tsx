import { useQuery } from '@tanstack/react-query';
import { EditAddress, EditPassword, EditProfile } from '../../actions';
import { Button } from '../../components';
import { openModal, useAuth } from '../../providers';
import { getAddress } from '../../queries/profileQueries';
import toast from 'react-hot-toast';
import Loader from '../../components/Loader';

export const ProfilePage = () => {
  const { user } = useAuth();
  const popup = openModal();
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
      <h1 className='text-2xl font-semibold pb-6'>Profile</h1>
      <div className='w-full flex flex-col gap-y-10'>
        <div className='border-t pt-10'>
          <div className='flex items-center justify-between w-full'>
            <h4 className='text-xl font-medium'>Personal Details</h4>
            <Button
              label={'Edit'}
              effect={() => popup({ component: <EditProfile /> })}
            />
          </div>
          <div className=' flex flex-col mt-5 gap-y-[10px]'>
            <span>
              {user.firstname} {user.lastname} ({user.email})
            </span>
            <span>{user.role.title}</span>
            <span>{user.phone_number}</span>
          </div>
        </div>
        <div className='border-t pt-10'>
          <div className='flex items-center justify-between w-full'>
            <h4 className='text-xl font-medium'>Password</h4>
            <Button
              label={'Edit'}
              effect={() => popup({ component: <EditPassword /> })}
            />
          </div>
          <div className=' flex flex-col mt-5 gap-y-[10px]'>
            <span>*******</span>
          </div>
        </div>
        <div className='border-t pt-10'>
          <div className='flex items-center justify-between w-full'>
            <h4 className='text-xl font-medium'>Billing Addreess</h4>
            <Button
              label={'Edit'}
              effect={() =>
                popup({ component: <EditAddress data={data?.address} /> })
              }
            />
          </div>
          <div className=' flex flex-col mt-5 gap-y-[10px]'>
            {isLoading ? (
              <Loader big />
            ) : (
              <span>
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
