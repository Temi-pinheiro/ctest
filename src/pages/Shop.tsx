/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import { ExploreCard } from '../components';
import { getProducts } from '../queries/productQueries';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';

export const ShopPage = () => {
  const { data: products, isLoading } = useQuery<{ products: Product[] }>({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const data = await getProducts();
        return data;
      } catch (error: any) {
        toast.error(error?.message);
      }
    },
  });
  console.log(products);
  return (
    <div className='flex min-h-screen flex-col pt-20 max-md:px-6'>
      <div className='max-w-[1140px] mx-auto w-full flex flex-col'>
        {isLoading ? (
          <div className='h-screen flex items-center'>
            <Loader big />
          </div>
        ) : (
          <>
            <h1 className='text-[40px] font-medium mt-12'>All Products</h1>
            <span className='block mt-12'>
              Showing all {products?.products.length} results
            </span>
            <div className='grid max-md:gap-y-10 md:grid-cols-3 w-full gap-x-10 gap-y-16 mt-12'>
              {products?.products?.map((product) => (
                <ExploreCard key={product.id} data={product} />
              ))}
            </div>

            <span className='text-center text-lg text-black/70 mt-[60px] max-md:mb-20'>
              Viewing 1-{products?.products.length} of{' '}
              {products?.products.length} products
            </span>
          </>
        )}
      </div>
    </div>
  );
};
