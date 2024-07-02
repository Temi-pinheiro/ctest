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
        <img src='/1.jpg' className='w-full h-full object-cover' />
        <div className='w-full h-full absolute inset-0 backdrop-brightness-50 flex flex-col items-center py-8'>
          <div className='flex flex-col items-center h-full justify-center'>
            <h1 className='text-[#fff] text-[34px] md:text-[92px] font-semibold cookie-regular'>
             Introducing Vaginne Allure
            </h1>
            <p className='mt-6 max-w-[1100px] text-base md:text-3xl text-white font-medium text-center max-md:px-6'>
              COWAScare offers a complete selection of intimate care products to
              maintain your secret garden with advanced scientific formulas.
              Giving you a touch of fresh and confident feeling
            </p>
            <Link
              to='/shop'
              className='mt-9 block border border-white py-3 md:text-lg rounded-lg px-6 w-fit font-medium text-white'
            >
              Shop Now
            </Link>
          </div>
          {/* <div className='mt-auto  flex items-center gap-x-10'>
            <span className='w-3 md:w-[90px] h-3 border border-white bg-white rounded-full'></span>
            <span className='w-3 md:w-[90px] h-3 border border-white  rounded-full'></span>
            <span className='w-3 md:w-[90px] h-3 border border-white  rounded-full'></span>
            <span className='w-3 md:w-[90px] h-3 border border-white  rounded-full'></span>
          </div> */}
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
                  <img src='/3.jpg' className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col max-w-[500px] gap-y-10 max-md:px-6'>
                  <h2 className='text-2xl md:text-4xl font-medium'>
                    Restore your youth and healthy Lifestyle
                  </h2>
                  <p className='text-black/70 md:text-[22px]'>
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
                <div className='max-md:px-6 max-w-[1050px] text-center flex flex-col items-center mx-auto justify-center w-full h-full'>
                  <h3 className='text-base md:text-4xl font-medium'>
                    Women’s intimate hygiene and health naturally improved
                  </h3>
                  <p className='mt-8 flex max-md:text-sm text-2xl flex-col gap-y-6 w-full'>
                    Vaginne Refreshing Intimate Gel enables every woman to
                    experience natural cleanliness and comfort in their most
                    intimate parts. Vaginne and natural plant essential oil keep
                    you refreshed all day, flaunting that natural fragrance from
                    inside out.
                  </p>

                  <a
                    href='/shop'
                    className="mt-9 block border border-white py-3 rounded-lg px-6 w-fit md:text-lg font-medium'"
                  >
                    Explore All
                  </a>
                </div>
              </div>
            </section>
          </Group>
          <Group key='why use'>
            <section>
              <div className='max-w-[1140px] w-full mx-auto flex max-md:flex-col gap-y-10 items-center justify-between pt-20 md:py-[140px]'>
                <div>
                  <h3 className='text-2xl md:text-4xl font-semibold'>
                    Why Use Vaginne Allure?
                  </h3>
                  <ul className='flex flex-col gap-y-4 mt-12 md:text-xl'>
                    <li>No chemicals or synthetic disinfectants</li>
                    <li>No alcohol </li>
                    <li>Produces a tightening effect</li>
                    <li>Effectively controls itching</li>
                    <li>No drugs or antibiotics</li>
                    <li>Reduces vaginal discharge</li>
                  </ul>
                </div>
                <div className='w-full md:w-[598px] h-[458px] md:rounded-lg overflow-clip'>
                  <img
                    src='/4.jpg'
                    className='w-full h-full object-left-bottom object-cover  '
                  />
                </div>
              </div>
            </section>
          </Group>
          <Reviews />
          <Group key='contact form'>
            <section className='w-full h-[700px] relative '>
              <img
                src='/8.jpg'
                alt='pond image'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 w-full h-full backdrop-brightness-[35%] text-white/80'>
                <form
                  onSubmit={handleSubscribe}
                  className='max-md:px-6 max-w-[531px] flex flex-col items-center mx-auto justify-center w-full h-full'
                >
                  <h3 className='text-xl md:text-2xl md:text-center font-medium'>
                    Sign up to our newsletter and get 10% of your next order
                  </h3>
                  <div className='mt-12 flex flex-col gap-y-6 w-full'>
                    <div className='grid gap-y-6 md:grid-cols-2 gap-x-[72px] w-full'>
                      <input
                        value={formData?.firstname}
                        name='firstname'
                        onChange={update}
                        placeholder='First name'
                        className='outline-none bg-transparent border-b border-white pb-2 md:text-lg placholder:text-white/80 w-full px-2 pt-1'
                      />
                      <input
                        value={formData?.lastname}
                        name='lastname'
                        onChange={update}
                        placeholder='Last name'
                        className='outline-none bg-transparent border-b border-white pb-2 md:text-lg placholder:text-white/80 w-full px-2 pt-1'
                      />
                    </div>
                    <input
                      value={formData?.email}
                      name='email'
                      onChange={update}
                      type='email'
                      placeholder='Your email adress here...'
                      className='outline-none bg-transparent border-b border-white pb-2 md:text-lg placholder:text-white/80 w-full px-2 pt-1'
                    />
                  </div>
                  <div className='flex items-center gap-x-2 w-full mt-6'>
                    <input
                      type='checkbox'
                      onChange={(e) => setAgreed(e.target.checked)}
                      className='h-10 w-10 bg-white/10 block accent-white/10'
                    />
                    <label className='text-sm md:text-base'>
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
                <div className='max-w-[666px] w-full'>
                  <p className='leading-[120%] md:leading-[180%] md:text-2xl'>
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
          <Group key='disclaimer'>
            <section className='w-full bg-gradient-to-r from-[#F2D8CF]/50 via-[#F2D8CF] to-[#F2D8CF]/50'>
              <div className='py-[200px] max-md:px-6 flex flex-col items-center text-center w-full max-w-[968px] mx-auto px-20'>
                <h2 className='flex items-center gap-x-[11px] text-2xl md:text-4xl '>
                  <svg
                    width='37'
                    height='37'
                    viewBox='0 0 37 37'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M19.625 25.25V16.25H15.125V18.5H17.375V25.25H14V27.5H23V25.25H19.625ZM18.5 9.5C18.1662 9.5 17.84 9.59897 17.5625 9.78439C17.285 9.96982 17.0687 10.2334 16.941 10.5417C16.8132 10.8501 16.7798 11.1894 16.8449 11.5167C16.91 11.8441 17.0708 12.1447 17.3068 12.3807C17.5428 12.6167 17.8434 12.7775 18.1708 12.8426C18.4981 12.9077 18.8374 12.8743 19.1458 12.7465C19.4541 12.6188 19.7177 12.4025 19.9031 12.125C20.0885 11.8475 20.1875 11.5213 20.1875 11.1875C20.1875 10.7399 20.0097 10.3107 19.6932 9.99426C19.3768 9.67779 18.9476 9.5 18.5 9.5Z'
                      fill='#2C2844'
                    />
                    <path
                      d='M18.5 34.25C15.385 34.25 12.3398 33.3263 9.74978 31.5957C7.1597 29.865 5.14098 27.4052 3.9489 24.5273C2.75682 21.6493 2.44492 18.4825 3.05264 15.4273C3.66036 12.3721 5.1604 9.56575 7.36307 7.36307C9.56575 5.1604 12.3721 3.66036 15.4273 3.05264C18.4825 2.44492 21.6493 2.75682 24.5273 3.9489C27.4052 5.14098 29.865 7.1597 31.5957 9.74978C33.3263 12.3398 34.25 15.385 34.25 18.5C34.25 22.6772 32.5906 26.6832 29.6369 29.6369C26.6832 32.5906 22.6772 34.25 18.5 34.25ZM18.5 5.00001C15.83 5.00001 13.2199 5.79177 10.9998 7.27517C8.77975 8.75857 7.04942 10.867 6.02763 13.3338C5.00585 15.8006 4.73851 18.515 5.25941 21.1337C5.78031 23.7525 7.06606 26.1579 8.95407 28.0459C10.8421 29.934 13.2475 31.2197 15.8663 31.7406C18.485 32.2615 21.1994 31.9942 23.6662 30.9724C26.133 29.9506 28.2414 28.2203 29.7248 26.0002C31.2082 23.7801 32 21.1701 32 18.5C32 14.9196 30.5777 11.4858 28.0459 8.95407C25.5142 6.42232 22.0804 5.00001 18.5 5.00001Z'
                      fill='#2C2844'
                    />
                  </svg>

                  <span>Disclaimer</span>
                </h2>
                <p className='mt-6 text-black/70 leading-[180%] md:text-2xl'>
                  COWAS International Trading Limited does not make any health
                  claims about its products. Vaginne Allure Intimate Care
                  Product should not be prescribed as medicine and the company
                  shall not be held liable for the medical claims made by its
                  customers.
                </p>
                <span className='mt-6 text-black/70 leading-[180%] font-semibold md:text-xl'>
                  Please be guided accordingly.
                </span>
              </div>
            </section>
          </Group>
        </motion.div>
      )}
    </div>
  );
};
