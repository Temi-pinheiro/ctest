import { useQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router-dom';
import { verifyPayment } from '../mutations/cartMutations';
import Loader from '../components/Loader';
import { useAuth, useCart } from '../providers';
import toast from 'react-hot-toast';

export const VerifyPaymentPage = () => {
  const searchParams = useSearchParams()[0];
  const { isAuthenticated } = useAuth();
  const { clearCart } = useCart();
  const ref = searchParams.get('trxref');
  const { isLoading } = useQuery({
    queryKey: ['verify payment', ref],
    queryFn: async () => {
      try {
        const data = await verifyPayment(ref!);
        if (!isAuthenticated) {
          clearCart();
        }
        return data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error?.message);
      }
    },
  });
  return isLoading ? (
    <div className='w-full flex flex-col items-center justify-center min-h-[70vh] max-md:pb-[96px] pt-[96px]'>
      <Loader big />
    </div>
  ) : (
    <div className='w-full flex flex-col items-center justify-center max-md:pb-[96px] pt-[96px]'>
      <img src='/emptycart.svg' alt='empty wishlist' />
      <div className='mt-10 md:mt-[72px] flex flex-col items-center gap-y-5 text-center'>
        <h2 className='text-xl'>Order succesfull</h2>
        <span className='text-black/70'>
          Congratulations , your order was successfull!
        </span>
      </div>
      <Link
        to='/'
        className='text-white font-semibold bg-[#EABEAF] rounded block mt-8 px-6 py-3 md:mt-[60px]'
      >
        Go home
      </Link>
    </div>
  );
};
