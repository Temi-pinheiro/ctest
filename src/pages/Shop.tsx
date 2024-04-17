import { ExploreCard } from '../components';

export const ShopPage = () => {
  const products = [
    {
      'id': 7,
      'name': 'VA Black',
      'description': 'Product 3 description',
      'quantity': 10,
      'image': [
        'https://images.unsplash.com/photo-1617825295690-28ae56c56135?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1532413992378-f169ac26fff0?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1594311431547-3ad8168cbd84?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661597206779-b6643eac8213?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      'amount': 12000,
    },
    {
      'id': 9,
      'name': 'VA Large Box of 6',
      'description': 'Product 3 description',
      'quantity': 10,
      'image': [
        'https://images.unsplash.com/photo-1617825295690-28ae56c56135?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1532413992378-f169ac26fff0?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1594311431547-3ad8168cbd84?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661597206779-b6643eac8213?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      'amount': 32000,
    },
    {
      'id': 12,
      'name': 'VA Small Box of 6',
      'description': 'Product 3 description',
      'quantity': 10,
      'image': [
        'https://images.unsplash.com/photo-1617825295690-28ae56c56135?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1532413992378-f169ac26fff0?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1594311431547-3ad8168cbd84?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661597206779-b6643eac8213?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      'amount': 24000,
    },
    {
      'id': 38,
      'name': 'VA Small Box of 6',
      'description': 'Product 3 description',
      'quantity': 10,
      'image': [
        'https://images.unsplash.com/photo-1617825295690-28ae56c56135?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1532413992378-f169ac26fff0?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1594311431547-3ad8168cbd84?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661597206779-b6643eac8213?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      'amount': 24000,
    },
  ];
  return (
    <div className='flex min-h-screen flex-col pt-24'>
      <div className='max-w-[1140px] mx-auto w-full flex flex-col'>
        <h1 className='text-[40px] font-medium mt-12'>All Products</h1>

        <span className='block mt-12'>Showing all 4 results</span>
        <div className='grid grid-cols-3 w-full gap-x-10 gap-y-16 mt-12'>
          {products.map((product) => (
            <ExploreCard key={product.id} data={product} />
          ))}
        </div>

        <span className='text-center text-lg text-black/70 mt-[60px]'>
          Viewing 1-4 of 4 products
        </span>
      </div>
    </div>
  );
};
