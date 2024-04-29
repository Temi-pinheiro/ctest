/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../../../providers';
import { getProductReviews } from '../../../queries/productQueries';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { postReview } from '../../../mutations/productMutations';
import { useForm } from '../../../hooks';
import { useState } from 'react';
import { Stars } from './components/Stars';
import Loader from '../../../components/Loader';

export const Reviews = () => {
  const qc = useQueryClient();
  const { formData, update, clear } = useForm({ initial: { reviews: '' } });
  const [ratings, setRating] = useState(1);
  const { isAuthenticated } = useAuth();
  const { id } = useParams();
  const { data: reviews, isLoading } = useQuery<any>({
    queryKey: ['reviews', id],
    queryFn: async () => getProductReviews(id!),

    ...{
      throwOnError() {
        toast.error('problem with shop');
        return false;
      },
    },
  });
  const { mutate, isPending } = useMutation<any, any, any, any>({
    mutationFn: (id) => postReview({ reviews: formData.reviews, ratings }, id),
    ...{
      onSuccess() {
        toast.success('Review sucessfully posted');
        qc.invalidateQueries({ queryKey: ['reviews', id] });
        setRating(0);
        clear('reviews');
      },
      throwOnError() {
        toast.error('problem with removing');

        return false;
      },
    },
  });

  const handleReview = (e: any) => {
    e.preventDefault();
    mutate(id!);
  };
  return (
    <div className='flex flex-col px-[10px]'>
      <h4 className='text-xl font-medium'>Reviews</h4>
      <div className='flex flex-col gap-y-12 mt-6 w-full '>
        {isLoading ? (
          <Loader big />
        ) : reviews.reviews.length > 0 ? (
          reviews?.reviews?.map((review: any) => (
            <div className='flex flex-col'>
              <div>
                <h2 className='text-xl font-semibold text-[#2C2844]'>
                  {review.user.firstname} {review.user.lastname}
                </h2>
                <span></span>
              </div>
              <Stars rating={review.ratings} disabled />
              <p className='mt-6 text-base'>{review.reviews}</p>
            </div>
          ))
        ) : (
          <p>
            No reviews on this product at the moment, be the first to publish
            one
          </p>
        )}
      </div>

      {isAuthenticated && (
        <div className='flex flex-col w-full'>
          <div className='flex items-center w-full justify-between mt-12'>
            <h3 className='text-2xl font-semibold'>Write a review</h3>
            <div className='items-center gap-x-2 flex'>
              <Stars rating={ratings} setRating={setRating} key='to write' />
            </div>
          </div>
          <textarea
            className='border px-5 py-[10px] w-full mt-6 rounded '
            placeholder='Please tell us what you think...'
            rows={6}
            name='reviews'
            value={formData.reviews}
            onChange={update}
          />
          <div className='ml-auto mt-10'>
            <button
              onClick={handleReview}
              className='bg-[#2C2844] px-8 py-4 rounded-md font-medium text-white flex justify-center'
            >
              {isPending ? <Loader /> : 'Publish'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
