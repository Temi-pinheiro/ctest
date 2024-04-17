import { useState } from 'react';
import { Group, Panes } from '../../components';
import { motion } from 'framer-motion';
import { usePanes } from '../../hooks';
import { Details, Returns, Reviews } from './panes';
export const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { show, handlePaneSwitch } = usePanes('details');

  const product = {
    'id': 7,
    'name': 'Vaginne Allure Black',
    'description': 'Product 3 description',
    'quantity': 10,
    'image': [
      'https://images.unsplash.com/photo-1617825295690-28ae56c56135?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1532413992378-f169ac26fff0?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1594311431547-3ad8168cbd84?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1661597206779-b6643eac8213?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    'amount': 12000,
  };
  const [activeImage, setActiveImage] = useState(product.image?.[0] || '');
  const handleIncrease = () => {
    setQuantity((prev) => ++prev);
  };
  const handleDecrease = () => {
    setQuantity((prev) => --prev);
  };
  const panes = [
    { id: 'details', label: 'Product Details', show: true },
    { id: 'reviews', label: 'Reviews', show: true },
    { id: 'returns', label: 'Delivery & Returns', show: true },
  ];
  return (
    <div className='flex min-h-screen flex-col pt-24'>
      <div className='max-w-[1040px] mx-auto w-full flex flex-col items-center'>
        <Group key='product'>
          <div className='flex items-center w-full gap-x-16 mt-[60px]'>
            <Group key='carousel'>
              <div className='flex items-center gap-x-5 max-w-[520px] w-full'>
                <div className='flex flex-col gap-y-10'>
                  {product.image.map((im) => (
                    <button
                      onClick={() => setActiveImage(im)}
                      className={`w-[74px] h-[70px] rounded-md overflow-clip hover:opacity-100 ${
                        activeImage == im ? 'opacity-100' : 'opacity-50'
                      } transition-opacity duration-200`}
                    >
                      <img
                        src={im}
                        alt='image'
                        className='object-cover w-full h-full'
                      />
                    </button>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={activeImage}
                  className='max-w-[420px] w-full h-[420px] rounded-lg overflow-clip'
                >
                  <img
                    src={activeImage}
                    className='w-full h-full object-cover'
                    alt='image'
                  />
                </motion.div>
              </div>
            </Group>
            <Group key='cart'>
              <div className='w-full flex flex-col'>
                <h1 className='text-[32px] font-medium'>{product.name}</h1>
                <div className='flex items-center gap-x-5 mt-4 border-b pb-4'>
                  <span className='text-xl text-black/70'>Small box of 6</span>
                  <svg
                    width='8'
                    height='9'
                    viewBox='0 0 8 9'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='4' cy='4.69434' r='4' fill='#2C2844' />
                  </svg>
                  <span className='text-xl font-medium'>N{product.amount}</span>
                </div>
                <p className='text-black/70 mt-3'>
                  Lorem ipsum dolor sit amet consectetur. Eu massa scelerisque
                  nisi eu lectus imperdiet quis ac urna. Orci lobortis nulla
                  ultricies proin morbi blandit vulputate ultrices aliquet.
                </p>
                <button className='text-xl text-white bg-[#2C2844] mt-12 py-3 rounded-md'>
                  Add to Bag
                </button>
                <div className='mt-12 flex items-center w-full justify-between'>
                  <Group key='quantity'>
                    <div className='flex items-center justify-between w-[35%] rounded-lg h-[50px] border border-[#1D1D1D] '>
                      <button
                        disabled={quantity <= 1}
                        onClick={handleDecrease}
                        className='w-[42px] h-full flex items-center rounded-l-lg justify-center bg-[#2C2844]/70 disabled:opacity-40'
                      >
                        <svg
                          width='16'
                          height='2'
                          viewBox='0 0 16 2'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='16' height='2' rx='1' fill='#fff' />
                        </svg>
                      </button>
                      <span className='text-[#263238] font-semibold'>
                        {quantity}
                      </span>
                      <button
                        //   disabled={leftOver <= quantity}
                        onClick={handleIncrease}
                        className='w-[42px] h-full flex items-center rounded-r-lg justify-center bg-[#2C2844]/70 disabled:opacity-40'
                      >
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z'
                            fill='#fff'
                          />
                          <rect
                            x='7'
                            y='16'
                            width='16'
                            height='2'
                            rx='1'
                            transform='rotate(-90 7 16)'
                            fill='#fff'
                          />
                        </svg>
                      </button>
                    </div>
                  </Group>
                  <Group key='wishlist'>
                    <div className='flex items-center gap-x-3'>
                      <button>
                        <svg
                          width='37'
                          height='37'
                          viewBox='0 0 37 37'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M32.3984 13.25C32.3984 22.6166 18.899 30.5 18.899 30.5C18.899 30.5 5.39844 22.5 5.39844 13.269C5.39844 9.50004 8.39844 6.50004 12.1484 6.50004C15.8984 6.50004 18.8984 11 18.8984 11C18.8984 11 21.8984 6.50004 25.6484 6.50004C29.3984 6.50004 32.3984 9.50004 32.3984 13.25Z'
                            stroke='black'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </button>
                      <span className='text-xl'>Add to Wishlist</span>
                    </div>
                  </Group>
                </div>
              </div>
            </Group>
          </div>
        </Group>
        <Group key='panes'>
          <div className='mt-[96px] w-full flex flex-col'>
            <Panes
              panes={panes}
              active={show}
              handleChange={handlePaneSwitch}
              key='attributes'
            />
            <div className='mt-5 text-sm text-[#263238]'>
              {show == 'details' && <Details />}
              {show == 'reviews' && <Reviews />}
              {show == 'returns' && <Returns />}
            </div>
          </div>
        </Group>
      </div>
    </div>
  );
};
