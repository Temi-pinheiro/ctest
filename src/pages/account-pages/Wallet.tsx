/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import { Withdraw } from '../../actions';
import { Button } from '../../components';
import { openModal } from '../../providers';
import { getWallet } from '../../queries/accountQueries';
import toast from 'react-hot-toast';
import Loader from '../../components/Loader';

export const WalletPage = () => {
  const popup = openModal();
  const { data: wallet, isLoading } = useQuery<{ wallet: any }>({
    queryKey: ['wallet'],
    queryFn: async () => {
      try {
        const data = await getWallet();
        return data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error?.message);
      }
    },
  });
  return (
    <div className='w-full flex flex-col text-[#2C2844]'>
      <h1 className='text-2xl font-semibold pb-6'>Wallet</h1>
      <div className='w-full flex flex-col gap-y-10'>
        <div className='border-t pt-10'>
          <div className='flex items-center justify-between w-full'>
            <h4 className='text-xl font-medium'>Lifetime Earnings</h4>
          </div>
          <div className=' flex flex-col mt-5 gap-y-[10px]'>
            <span>No earnings available</span>
          </div>
        </div>
        <div className='border-t pt-10'>
          <div className='flex items-center justify-between w-full'>
            <h4 className='text-xl font-medium'>Balance</h4>
          </div>
          {isLoading ? (
            <Loader big />
          ) : (
            <div className=' flex flex-col mt-5 gap-y-[10px]'>
              <span>{wallet?.wallet?.balance || '0.00'}</span>
              <span>
                <Button
                  label='Withdraw'
                  disabled={Boolean(!wallet)}
                  effect={() => popup({ component: <Withdraw /> })}
                />
              </span>
            </div>
          )}
        </div>
        <div className='border-t pt-10'>
          <div className='flex items-center justify-between w-full'>
            <h4 className='text-xl font-medium'>Bank Details</h4>
          </div>
          <div className=' flex flex-col mt-5 gap-y-[10px]'>
            <span>
              <Button disabled label='Add Account' />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
