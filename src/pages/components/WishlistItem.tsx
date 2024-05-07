import { getFullMoney } from '../../utils/FormatAmount';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  addWishlistItemToBag,
  removeFromWishlist,
} from '../../mutations/productMutations';
import toast from 'react-hot-toast';
import Loader from '../../components/Loader';
import { useCart } from '../../providers';

export const WishlistItem = ({
  item,
}: {
  item: { id: number; product: Product };
}) => {
  const qc = useQueryClient();
  const { refetch } = useCart();
  const { mutate: remove, isPending: removing } = useMutation({
    mutationFn: () => removeFromWishlist(item.id),
    ...{
      onSuccess() {
        toast.success('Item removed from wishlist');
        qc.invalidateQueries({ queryKey: ['wishlist'] });
      },
      onError(err) {
        toast.error(err?.message);

        return false;
      },
    },
  });
  const { mutate: add, isPending: adding } = useMutation({
    mutationFn: () => addWishlistItemToBag(item.id),
    ...{
      onSuccess() {
        toast.success('Item added to bag');
        qc.invalidateQueries({ queryKey: ['wishlist'] });
        refetch();
      },
      onError(err) {
        toast.error(err?.message);

        return false;
      },
    },
  });
  return (
    <tr className='bordr-b'>
      <td className='py-10'>
        <span className='flex items-center gap-x-10'>
          <img
            src='https://images.unsplash.com/photo-1617825295690-28ae56c56135?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='w-[180px] h-[125px] rounded-md object-cover'
          />
          <section className='flex flex-col gap-y-[30px] text-[#2C2844]'>
            <span className='font-medium text-2xl'>{item?.product.name}</span>
            <span>{getFullMoney(item?.product.amount)}</span>
          </section>
        </span>
      </td>
      <td className='text-xl py-10' align='center'>
        {item?.product.quantity > 0 ? (
          <span className='text-[#5CB85C] font-medium'>In Stock</span>
        ) : (
          <span className='text-[#FF0F0F] font-medium'>Out Of Stock</span>
        )}
      </td>

      <td align='right' className='py-10'>
        <span className='flex items-center gap-x-10 w-fit'>
          <button
            onClick={() => add()}
            disabled={adding}
            className='rounded border bg-[#EABEAF] px-5 py-3 text-xl font-medium text-[#fff] border-transparent flex items-center justify-center'
          >
            {adding ? <Loader bgColor='#fff' /> : 'Add to bag'}
          </button>
          <button onClick={() => remove()} disabled={removing}>
            {removing ? (
              <Loader />
            ) : (
              <svg
                width='37'
                height='36'
                viewBox='0 0 37 36'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15.3384 7.5H21.3384C21.3384 6.70435 21.0223 5.94129 20.4597 5.37868C19.8971 4.81607 19.134 4.5 18.3384 4.5C17.5427 4.5 16.7797 4.81607 16.2171 5.37868C15.6545 5.94129 15.3384 6.70435 15.3384 7.5ZM13.0884 7.5C13.0884 6.81056 13.2242 6.12787 13.488 5.49091C13.7518 4.85395 14.1386 4.2752 14.6261 3.78769C15.1136 3.30018 15.6923 2.91347 16.3293 2.64963C16.9663 2.3858 17.6489 2.25 18.3384 2.25C19.0278 2.25 19.7105 2.3858 20.3475 2.64963C20.9844 2.91347 21.5632 3.30018 22.0507 3.78769C22.5382 4.2752 22.9249 4.85395 23.1887 5.49091C23.4526 6.12787 23.5884 6.81056 23.5884 7.5H32.2134C32.5117 7.5 32.7979 7.61853 33.0089 7.8295C33.2199 8.04048 33.3384 8.32663 33.3384 8.625C33.3384 8.92337 33.2199 9.20952 33.0089 9.4205C32.7979 9.63147 32.5117 9.75 32.2134 9.75H30.2334L28.4784 27.9165C28.3438 29.3085 27.6954 30.6004 26.6599 31.5402C25.6244 32.4801 24.2758 33.0005 22.8774 33H13.7994C12.4012 33.0002 11.053 32.4796 10.0178 31.5397C8.98258 30.5999 8.33448 29.3082 8.19988 27.9165L6.44338 9.75H4.46338C4.16501 9.75 3.87886 9.63147 3.66788 9.4205C3.45691 9.20952 3.33838 8.92337 3.33838 8.625C3.33838 8.32663 3.45691 8.04048 3.66788 7.8295C3.87886 7.61853 4.16501 7.5 4.46338 7.5H13.0884ZM16.0884 14.625C16.0884 14.3266 15.9699 14.0405 15.7589 13.8295C15.5479 13.6185 15.2617 13.5 14.9634 13.5C14.665 13.5 14.3789 13.6185 14.1679 13.8295C13.9569 14.0405 13.8384 14.3266 13.8384 14.625V25.875C13.8384 26.1734 13.9569 26.4595 14.1679 26.6705C14.3789 26.8815 14.665 27 14.9634 27C15.2617 27 15.5479 26.8815 15.7589 26.6705C15.9699 26.4595 16.0884 26.1734 16.0884 25.875V14.625ZM21.7134 13.5C22.0117 13.5 22.2979 13.6185 22.5089 13.8295C22.7199 14.0405 22.8384 14.3266 22.8384 14.625V25.875C22.8384 26.1734 22.7199 26.4595 22.5089 26.6705C22.2979 26.8815 22.0117 27 21.7134 27C21.415 27 21.1289 26.8815 20.9179 26.6705C20.7069 26.4595 20.5884 26.1734 20.5884 25.875V14.625C20.5884 14.3266 20.7069 14.0405 20.9179 13.8295C21.1289 13.6185 21.415 13.5 21.7134 13.5ZM10.4394 27.7005C10.5203 28.5355 10.9092 29.3104 11.5304 29.8742C12.1516 30.4379 12.9605 30.7502 13.7994 30.75H22.8774C23.7163 30.7502 24.5251 30.4379 25.1463 29.8742C25.7675 29.3104 26.1565 28.5355 26.2374 27.7005L27.9744 9.75H8.70238L10.4394 27.7005Z'
                  fill='black'
                />
              </svg>
            )}
          </button>
        </span>
      </td>
    </tr>
  );
};
