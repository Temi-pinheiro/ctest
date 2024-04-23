import { Link, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  console.log(error);
  return (
    <div className='flex md:min-h-screen flex-col pt-20'>
      {' '}
      <div className='w-full flex flex-col items-center justify-center max-md:pb-[96px] pt-[96px]'>
        <img src='/emptywishlist.svg' alt='empty wishlist' />
        <div className='mt-10 md:mt-[72px] flex flex-col items-center gap-y-5 text-center'>
          <h2 className='text-xl'>We apologize</h2>
          <span className='text-black/70'>
            {error.status == 404
              ? 'The page you are looking for does not exist'
              : error.error.message}
          </span>
        </div>
        <Link
          to='/'
          className='text-white font-semibold bg-[#EABEAF] rounded block mt-8 px-6 py-3 md:mt-[60px]'
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};
