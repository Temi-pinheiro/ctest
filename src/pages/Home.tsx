import { ExploreCard, Group } from '../components';

export const HomePage = () => {
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
  ];
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
            <a
              href='/shop'
              className='mt-9 block border border-white py-3 rounded-lg px-6 w-fit font-medium text-white'
            >
              Shop Now
            </a>
          </div>
          <div className='mt-auto  flex items-center gap-x-10'>
            <span className='w-3 md:w-[90px] h-3 border border-white bg-white rounded-full'></span>
            <span className='w-3 md:w-[90px] h-3 border border-white  rounded-full'></span>
            <span className='w-3 md:w-[90px] h-3 border border-white  rounded-full'></span>
            <span className='w-3 md:w-[90px] h-3 border border-white  rounded-full'></span>
          </div>
        </div>
      </section>
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
                Our Flagship Product Vaginne® maintains and improves the health
                of a woman’s vagina. It balances “good” bacteria (lactobacilli)
                and “bad” bacteria (anaerobes). In addition, Vaginne® helps the
                vagina regain its immune system and increase its defensive
                power.
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
              <div className='grid md:grid-cols-3 w-full gap-x-10 max-md:px-6 gap-y-10'>
                {products.map((product) => (
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
                intimate parts. Vaginne and natural plant essential oil keep you
                refreshed all day, flaunting that natural fragrance from inside
                out.
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
          <div className='max-w-[1040px] w-full mx-auto flex max-md:flex-col gap-y-10 items-center justify-between py-20 md:py-[140px]'>
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
            <div className='w-full md:w-[598px] h-[458px] rounded-lg overflow-clip'>
              <img
                src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='w-full h-full object-cover '
              />
            </div>
          </div>
        </section>
      </Group>
      <Group key='reviews'>
        <section className='bg-[#F9F9F9]'>
          <div className='max-w-[956px] w-full flex max-md:flex-col items-center py-[110px] mx-auto justify-between'>
            <div className='flex flex-col max-w-[376px] items-center w-full max-md:px-6'>
              <h3 className='text-[30px]'>Customer Reviews</h3>
              <div className='flex flex-col items-center'>
                <div className='w-[120px] h-[120px] rounded-full overflow-clip mt-[68px]'>
                  <img
                    src='https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='pond image'
                    className='w-full h-full object-cover'
                  />
                </div>
                <p className='text-center italic text-black/70 mt-9'>
                  “I've struggled with maintaining vaginal health until I found
                  Vaginne Allure. Their products are gentle yet effective,
                  leaving me feeling fresh and revitalized. Thank you!”
                </p>
                <div className='flex items-center flex-col mt-9'>
                  <h6>Somto Nwobu</h6>
                  <span className='text-sm text-black/50'>
                    Admin, Unesco Nigeria
                  </span>
                </div>
              </div>
            </div>
            <div className='max-md:hidden max-w-[386px] w-full grid grid-cols-3 gap-x-[42px] gap-y-[72px] '>
              <div className='w-[100px] h-[100px] rounded overflow-clip'>
                <img
                  src='https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='w-[100px] h-[100px] rounded overflow-clip opacity-50'>
                <img
                  src='https://images.unsplash.com/photo-1578774296842-c45e472b3028?q=80&w=2656&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='w-[100px] h-[100px] rounded overflow-clip opacity-50'>
                <img
                  src='https://images.unsplash.com/photo-1613730317814-1cede28e0151?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='w-[100px] h-[100px] rounded overflow-clip opacity-50'>
                <img
                  src='https://images.unsplash.com/photo-1559637621-d766677659e8?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='w-[100px] h-[100px] rounded overflow-clip opacity-50'>
                <img
                  src='https://images.unsplash.com/photo-1585600255897-eb44d312c178?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='w-[100px] h-[100px] rounded overflow-clip opacity-50'>
                <img
                  src='https://images.unsplash.com/photo-1630475003549-e11ab5f0670f?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  className='object-cover w-full h-full'
                />
              </div>
            </div>
          </div>
        </section>
      </Group>
      <Group key='contact form'>
        <section className='w-full h-[700px] relative '>
          <img
            src='https://images.unsplash.com/photo-1530137176569-e65de21f1ec3?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='pond image'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 w-full h-full backdrop-brightness-[35%] text-white/80'>
            <div className='max-md:px-6 max-w-[531px] flex flex-col items-center mx-auto justify-center w-full h-full'>
              <h3 className='text-xl font-medium'>
                Sign up to our newsletter and get 10% of your next order
              </h3>
              <div className='mt-12 flex flex-col gap-y-6 w-full'>
                <div className='grid gap-y-6 md:grid-cols-2 gap-x-[72px] w-full'>
                  <input
                    placeholder='First name'
                    className='outline-none bg-transparent border-b border-white pb-2 placholder:text-white/80 w-full'
                  />
                  <input
                    placeholder='Last name'
                    className='outline-none bg-transparent border-b border-white pb-2 placholder:text-white/80 w-full'
                  />
                </div>
                <input
                  placeholder='Your email adress here...'
                  className='outline-none bg-transparent border-b border-white pb-2 placholder:text-white/80 w-full'
                />
              </div>
              <div className='flex items-center gap-x-2 w-full mt-6'>
                <input
                  type='checkbox'
                  className='h-10 w-10 bg-white/10 block accent-white/10'
                />
                <label className='text-sm'>
                  By ticking this, you agree that CowasCare stores and uses your
                  information to contact you as listed in our fair processing
                  notice and privacy policy.
                </label>
              </div>
              <button className="mt-9 block border border-white py-3 rounded-lg px-6 w-fit font-medium'">
                Submit
              </button>
            </div>
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
                health? Join thousands of women who trust our products to feel
                fresh, confident, and empowered every day. Explore our
                collection now and discover the secret to keeping your intimate
                area radiant and healthy.
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
      <Group key='health notice'>
        <section className='w-full bg-gradient-to-r from-[#F2D8CF]/50 via-[#F2D8CF] to-[#F2D8CF]/50'>
          <div className='py-[200px] max-md:px-6 flex flex-col items-center text-center w-full max-w-[768px] mx-auto'>
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

              <span>Health Claims Notice</span>
            </h2>
            <p className='mt-6 text-black/70 leading-[180%]'>
              COWAS International Trading Limited does not make any health
              claims about its products. Vaginne Allure Intimate Care Product
              should not be prescribed as medicine and the company shall not be
              held liable for the medical claims made by its customers.
            </p>
            <span className='mt-6 text-black/70 leading-[180%]'>
              Please be guided accordingly.
            </span>
          </div>
        </section>
      </Group>
    </div>
  );
};
