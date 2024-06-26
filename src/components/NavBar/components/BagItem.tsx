import { useCart } from '../../../providers';
import { getFullMoney } from '../../../utils/FormatAmount';
import Loader from '../../Loader';

export const BagItem = ({ item }: { item: Cart['items'][0] }) => {
  const { removeItemFromCart } = useCart();
  return (
    <div className='border-b pb-5 flex items-center gap-x-5 relative'>
      <div className='w-[134px] rounded-lg h-[140px] overflow-clip'>
        <img
          src='https://plus.unsplash.com/premium_photo-1661597206779-b6643eac8213?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='object-cover w-full'
        />
      </div>
      <div className='flex flex-col'>
        <h3 className='text-xl text-[#2C2844] font-medium'>{item.name}</h3>
        <span className='text-xs text-black/50 mt-2 block'>
          Extra product details
        </span>
        <span>Qty: {item.quantity}</span>
        <span className='mt-2 block font-semibold text-black'>
          {getFullMoney(item.price)}
        </span>
        <div className='flex w-full justify-between mt-10'>
          <div className=' flex items-center gap-x-6'>
            <button className='flex items-center justify-center rounded-full bg-[#EDEDED] w-[26px] h-[26px]'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M10.1677 15.9716C10.1677 15.9716 17.2567 11.8318 17.2567 6.91306C17.2567 4.94381 15.6813 3.36841 13.7121 3.36841C11.7428 3.36841 10.1674 5.73151 10.1674 5.73151C10.1674 5.73151 8.59203 3.36841 6.62278 3.36841C4.65353 3.36841 3.07812 4.94381 3.07812 6.92303C3.07812 11.7706 10.1677 15.9716 10.1677 15.9716Z'
                  fill='black'
                />
              </svg>
            </button>
            <button
              onClick={() =>
                removeItemFromCart.remove(
                  item.itemId,
                  item.price * item.quantity
                )
              }
              disabled={removeItemFromCart.removing(item.itemId)}
              className='flex items-center justify-center rounded-full bg-[#EDEDED] w-[26px] h-[26px] '
            >
              {removeItemFromCart.removing(item.itemId) ? (
                <Loader />
              ) : (
                <svg
                  width='18'
                  height='19'
                  viewBox='0 0 18 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.49414 4.65723H10.4941C10.4941 4.2594 10.3361 3.87787 10.0548 3.59657C9.7735 3.31526 9.39196 3.15723 8.99414 3.15723C8.59632 3.15723 8.21478 3.31526 7.93348 3.59657C7.65218 3.87787 7.49414 4.2594 7.49414 4.65723ZM6.36914 4.65723C6.36914 4.31251 6.43704 3.97116 6.56896 3.65268C6.70087 3.3342 6.89423 3.04483 7.13799 2.80107C7.38174 2.55732 7.67112 2.36396 7.9896 2.23204C8.30808 2.10012 8.64942 2.03223 8.99414 2.03223C9.33886 2.03223 9.6802 2.10012 9.99868 2.23204C10.3172 2.36396 10.6065 2.55732 10.8503 2.80107C11.094 3.04483 11.2874 3.3342 11.4193 3.65268C11.5512 3.97116 11.6191 4.31251 11.6191 4.65723H15.9316C16.0808 4.65723 16.2239 4.71649 16.3294 4.82198C16.4349 4.92747 16.4941 5.07054 16.4941 5.21973C16.4941 5.36891 16.4349 5.51199 16.3294 5.61747C16.2239 5.72296 16.0808 5.78223 15.9316 5.78223H14.9416L14.0641 14.8655C13.9968 15.5615 13.6727 16.2074 13.1549 16.6773C12.6371 17.1473 11.9629 17.4075 11.2636 17.4072H6.72464C6.02554 17.4073 5.35147 17.147 4.83385 16.6771C4.31624 16.2072 3.99219 15.5613 3.92489 14.8655L3.04664 5.78223H2.05664C1.90746 5.78223 1.76438 5.72296 1.65889 5.61747C1.5534 5.51199 1.49414 5.36891 1.49414 5.21973C1.49414 5.07054 1.5534 4.92747 1.65889 4.82198C1.76438 4.71649 1.90746 4.65723 2.05664 4.65723H6.36914ZM7.86914 8.21973C7.86914 8.07054 7.80988 7.92747 7.70439 7.82198C7.5989 7.71649 7.45582 7.65723 7.30664 7.65723C7.15746 7.65723 7.01438 7.71649 6.90889 7.82198C6.8034 7.92747 6.74414 8.07054 6.74414 8.21973V13.8447C6.74414 13.9939 6.8034 14.137 6.90889 14.2425C7.01438 14.348 7.15746 14.4072 7.30664 14.4072C7.45582 14.4072 7.5989 14.348 7.70439 14.2425C7.80988 14.137 7.86914 13.9939 7.86914 13.8447V8.21973ZM10.6816 7.65723C10.8308 7.65723 10.9739 7.71649 11.0794 7.82198C11.1849 7.92747 11.2441 8.07054 11.2441 8.21973V13.8447C11.2441 13.9939 11.1849 14.137 11.0794 14.2425C10.9739 14.348 10.8308 14.4072 10.6816 14.4072C10.5325 14.4072 10.3894 14.348 10.2839 14.2425C10.1784 14.137 10.1191 13.9939 10.1191 13.8447V8.21973C10.1191 8.07054 10.1784 7.92747 10.2839 7.82198C10.3894 7.71649 10.5325 7.65723 10.6816 7.65723ZM5.04464 14.7575C5.08509 15.175 5.27957 15.5624 5.59017 15.8443C5.90076 16.1262 6.3052 16.2823 6.72464 16.2822H11.2636C11.6831 16.2823 12.0875 16.1262 12.3981 15.8443C12.7087 15.5624 12.9032 15.175 12.9436 14.7575L13.8121 5.78223H4.17614L5.04464 14.7575Z'
                    fill='black'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
