import { Withdraw } from '../../actions';
import { Button } from '../../components';
import { openModal } from '../../providers';

export const WalletPage = () => {
  const popup = openModal();
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
          <div className=' flex flex-col mt-5 gap-y-[10px]'>
            <span>0.00</span>
            <span>
              <Button
                label='Withdraw'
                effect={() => popup({ component: <Withdraw /> })}
              />
            </span>
          </div>
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
