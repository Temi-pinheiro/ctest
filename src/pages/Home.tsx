/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import { ExploreCard, Group } from '../components';
import { getProducts } from '../queries/productQueries';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/framer';
import { useForm } from '../hooks';
import { FormEvent, useState } from 'react';
import { postSubscribe } from '../mutations/userMutations';
import Loader from '../components/Loader';
import { Reviews } from './components';
import { Link } from 'react-router-dom';

export const HomePage = () => {
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
    ...{ refetchOnWindowFocus: false },
  });
  const [agreed, setAgreed] = useState(false);
  const { formData, update, clear } = useForm({
    initial: {
      firstname: '',
      lastname: '',
      email: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () => postSubscribe({ ...formData }),
    ...{
      onSuccess() {
        toast.success('Successfully subscribed');
        clear('email');
        clear('firstname');
        clear('lastname');
        setAgreed(false);
      },
      onError(err) {
        toast.error(err?.message);

        return false;
      },
    },
  });

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    mutate();
  };
  return (
    <div className='flex md:min-h-screen flex-col pt-20'>
      <section className='h-screen w-full relative'>
        <img
          src='https://images.unsplash.com/photo-1618553577337-f5006b34f420?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='w-full h-full object-cover'
        />
        <div className='w-full h-full absolute inset-0 backdrop-brightness-50 flex flex-col items-center py-8'>
          <div className='flex flex-col items-center h-full justify-center'>
            <h1 className='text-[#fff] text-[34px] md:text-[62px] font-semibold cookie-regular'>
              Vaginne Allure
            </h1>
            <p className='mt-6 max-w-[800px] text-base md:text-2xl text-white font-medium text-center max-md:px-6'>
              COWAScare offers a complete selection of intimate care products to
              maintain your secret garden with advanced scientific formulas.
              Giving you a touch of fresh and confident feeling
            </p>
            <Link
              to='/shop'
              className='mt-9 block border border-white py-3 rounded-lg px-6 w-fit font-medium text-white'
            >
              Shop Now
            </Link>
          </div>
          <div className='mt-auto  flex items-center gap-x-10'>
            <span className='w-3 md:w-[90px] h-3 border border-white bg-white rounded-full'></span>
            <span className='w-3 md:w-[90px] h-3 border border-white  rounded-full'></span>
            <span className='w-3 md:w-[90px] h-3 border border-white  rounded-full'></span>
            <span className='w-3 md:w-[90px] h-3 border border-white  rounded-full'></span>
          </div>
        </div>
      </section>
      {isLoading ? null : (
        <motion.div
          variants={fadeIn}
          animate='animate'
          initial='initial'
          className='w-full flex flex-col'
        >
          {' '}
          <Group key='restrore'>
            <section className='w-full'>
              <div className='max-w-[1040px] w-full mx-auto flex max-md:flex-col gap-y-8 items-center justify-between py-[120px]'>
                <div className='w-full md:w-[450px] h-[420px] md:rounded-lg overflow-clip'>
                  <img
                    src='https://plus.unsplash.com/premium_photo-1661597206779-b6643eac8213?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='flex flex-col max-w-[500px] gap-y-10 max-md:px-6'>
                  <h2 className='text-2xl font-medium'>
                    Restore your youth and healthy Lifestyle
                  </h2>
                  <p className='text-black/70 '>
                    Our Flagship Product Vaginne® maintains and improves the
                    health of a woman’s vagina. It balances “good” bacteria
                    (lactobacilli) and “bad” bacteria (anaerobes). In addition,
                    Vaginne® helps the vagina regain its immune system and
                    increase its defensive power.
                  </p>
                </div>
              </div>
            </section>
          </Group>
          <Group key='explore'>
            <section className='w-full'>
              <div className='w-full max-w-[1040px] flex flex-col mx-auto items-center py-10 md:py-[82px]'>
                <h2 className='font-semibold text-4xl'>Vaginne Allure Sets</h2>
                <div className='flex flex-col items-center gap-y-8 w-full mt-12'>
                  <div className='flex items-center w-full gap-x-10 max-md:px-6 gap-y-10 flex-wrap justify-center'>
                    {products?.products?.map((product) => (
                      <ExploreCard key={product.id} data={product} />
                    ))}
                  </div>

                  <a
                    href='/shop'
                    className='block mt-4 bg-[#e4b3a3] py-3 rounded-lg px-6 w-fit font-medium text-white'
                  >
                    See more
                  </a>
                </div>
              </div>
            </section>
          </Group>
          <Group key='cta'>
            <section className='w-full h-[400px] md:h-screen relative '>
              <img
                src='https://images.unsplash.com/photo-1539622230226-3d4eb483b3f2?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='pond image'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 w-full h-full backdrop-brightness-[35%] text-white/80'>
                <div className='max-md:px-6 max-w-[950px] text-center flex flex-col items-center mx-auto justify-center w-full h-full'>
                  <h3 className='text-base md:text-[30px] font-medium'>
                    Women’s intimate hygiene and health naturally improved
                  </h3>
                  <p className='mt-8 flex max-md:text-sm flex-col gap-y-6 w-full'>
                    Vaginne Refreshing Intimate Gel enables every woman to
                    experience natural cleanliness and comfort in their most
                    intimate parts. Vaginne and natural plant essential oil keep
                    you refreshed all day, flaunting that natural fragrance from
                    inside out.
                  </p>

                  <a
                    href='/shop'
                    className="mt-9 block border border-white py-3 rounded-lg px-6 w-fit font-medium'"
                  >
                    Explore All
                  </a>
                </div>
              </div>
            </section>
          </Group>
          <Group key='why use'>
            <section>
              <div className='max-w-[1040px] w-full mx-auto flex max-md:flex-col gap-y-10 items-center justify-between pt-20 md:py-[140px]'>
                <div>
                  <h3 className='text-2xl font-semibold'>
                    Why Use Vaginne Allure?
                  </h3>
                  <ul className='flex flex-col gap-y-4 mt-12'>
                    <li>No chemicals or synthetic disinfectants</li>
                    <li>No alcohol </li>
                    <li>Produces a tightening effect</li>
                    <li>Effectively controls itching</li>
                    <li>No drugs or antibiotics</li>
                    <li>Reduces vaginal discharge</li>
                  </ul>
                </div>
                <div className='w-full md:w-[598px] h-[458px] md:drounded-lg overflow-clip'>
                  <img
                    src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    className='w-full h-full object-cover '
                  />
                </div>
              </div>
            </section>
          </Group>
          <Reviews />
          <Group key='contact form'>
            <section className='w-full h-[700px] relative '>
              <img
                src='https://images.unsplash.com/photo-1530137176569-e65de21f1ec3?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='pond image'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 w-full h-full backdrop-brightness-[35%] text-white/80'>
                <form
                  onSubmit={handleSubscribe}
                  className='max-md:px-6 max-w-[531px] flex flex-col items-center mx-auto justify-center w-full h-full'
                >
                  <h3 className='text-xl font-medium'>
                    Sign up to our newsletter and get 10% of your next order
                  </h3>
                  <div className='mt-12 flex flex-col gap-y-6 w-full'>
                    <div className='grid gap-y-6 md:grid-cols-2 gap-x-[72px] w-full'>
                      <input
                        value={formData?.firstname}
                        name='firstname'
                        onChange={update}
                        placeholder='First name'
                        className='outline-none bg-transparent border-b border-white pb-2 placholder:text-white/80 w-full px-2 pt-1'
                      />
                      <input
                        value={formData?.lastname}
                        name='lastname'
                        onChange={update}
                        placeholder='Last name'
                        className='outline-none bg-transparent border-b border-white pb-2 placholder:text-white/80 w-full px-2 pt-1'
                      />
                    </div>
                    <input
                      value={formData?.email}
                      name='email'
                      onChange={update}
                      type='email'
                      placeholder='Your email adress here...'
                      className='outline-none bg-transparent border-b border-white pb-2 placholder:text-white/80 w-full px-2 pt-1'
                    />
                  </div>
                  <div className='flex items-center gap-x-2 w-full mt-6'>
                    <input
                      type='checkbox'
                      onChange={(e) => setAgreed(e.target.checked)}
                      className='h-10 w-10 bg-white/10 block accent-white/10'
                    />
                    <label className='text-sm'>
                      By ticking this, you agree that CowasCare stores and uses
                      your information to contact you as listed in our fair
                      processing notice and privacy policy.
                    </label>
                  </div>
                  <button
                    type='submit'
                    disabled={
                      !formData.email ||
                      !formData.firstname ||
                      !formData.lastname ||
                      !agreed
                    }
                    className='mt-9 border border-white py-3 rounded-lg px-6 w-fit font-medium disabled:opacity-40 transition-opacity duration-200 flex items-center justify-center'
                  >
                    {isPending ? <Loader bgColor='#fff' /> : 'Submit'}
                  </button>
                </form>
              </div>
            </section>
          </Group>
          <Group key='experience'>
            <section className='bg-[#2C2844] text-white'>
              <div className='max-md:px-6 max-w-[1136px] mx-auto flex max-md:flex-col gap-y-10 max-md:text-center items-center w-full py-[92px] justify-between'>
                <h2 className='text-3xl md:text-5xl font-medium max-w-[338px] leading-[150%]'>
                  Experience the Difference Today!
                </h2>
                <div className='max-w-[566px] w-full'>
                  <p className='leading-[120%] md:leading-[180%]'>
                    Ready to elevate your routine and prioritize your intimate
                    health? Join thousands of women who trust our products to
                    feel fresh, confident, and empowered every day. Explore our
                    collection now and discover the secret to keeping your
                    intimate area radiant and healthy.
                  </p>
                  <a
                    href='/shop'
                    className='mt-9 block bg-[#EABEAF] py-3 rounded-lg px-6 w-fit font-medium max-md:mx-auto'
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </section>
          </Group>
        </motion.div>
      )}
    </div>
  );
};
