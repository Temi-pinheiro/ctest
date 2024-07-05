import { Group } from '../components';

export const AboutUsPage = () => {
  return (
    <div className='flex min-h-screen flex-col md:pt-20'>
      <section className=' w-full relative'>
        <div className='max-w-[1040px] w-full md:rounded-[24px] mt-14 mx-auto overflow-clip'>
          <video
            src='/skin.mp4'
            autoPlay
            muted
            loop
            controls={false}
            className='w-full h-full object-cover'
          />
        </div>
      </section>

      <Group key='story'>
        <section className='w-full'>
          <div className='max-w-[1040px] w-full mx-auto flex flex-col gap-y-6 py-10 md:py-20 max-md:px-6'>
            <h2 className='text-3xl md:text-[64px] font-medium text-[#2C2844]'>
              VAGINNE® Allure
            </h2>
            <p className='text-black/70 text-2xl max-md:text-lg'>
              <span>Pamper yourself, Be a blissful woman!</span>
              <br />
              Vaginne® Allure Refreshing Intimate Gel enables every woman to
              experience natural cleanliness and comfort in their most intimate
              part. Vaginne® Allure and natural plant essential oil keep you
              refreshed all day, flaunting that natural fragrance from inside
              out.
              <br />
              <br />
              Our Flagship Product Vaginne® Allure Refreshing Intimate Gel
              maintains and improves the health of a woman’s vagina. It balances
              “good” bacteria (lactobacilli) and “bad” bacteria (anaerobes). In
              addition, Vaginne® Allure helps the vagina regain its immune
              system and increase its defensive power.
            </p>
          </div>
        </section>
      </Group>
      <Group key='mission'>
        <section className='w-full'>
          <div className='max-w-[1040px] w-full mx-auto gap-y-6 flex flex-col py-10 md:py-20 max-md:px-6'>
            <h2 className='text-3xl md:text-[64px] font-medium text-[#2C2844]'>
              Why our refreshing intimate gel
            </h2>
            <p className='max-md:text-lg text-2xl text-black/70'>
              Increase the inhibition of bacteria, strengthens good bacteria:
              Inhibits bad bacteria, protects good bacteria and raises the
              self-cleaning mechanism <br />
              <br />
              Firming, Moisturizing, Refreshing and Repairing: <br />
              Total repair of epithelial tissue, boosts nutrient, anti-aging and
              nourishing and enhances the elasticity of the vagina wall <br />{' '}
              <br />
              Enjoy Blissfulness: <br />
              Eliminates odor, feel and smell fresh all day
            </p>
          </div>
        </section>
      </Group>
      <Group key='numbers'>
        <section className='bg-[#F9F9F9] w-full'>
          <div className='py-9 max-w-[895px] w-full mx-auto grid grid-cols-2 gap-y-10 md:grid-cols-4 jusify-between'>
            <div className='flex flex-col items-center gap-y-8'>
              <h3 className='text-[40px] md:text-[60px] font-medium text-[#2C2844]'>
                26K+
              </h3>
              <span className='text-2xl text-black/70'>Customers</span>
            </div>
            <div className='flex flex-col items-center gap-y-8'>
              <h3 className='text-[40px] md:text-[60px] font-medium text-[#2C2844]'>
                12
              </h3>
              <span className='text-2xl text-black/70'>Countries</span>
            </div>
            <div className='flex flex-col items-center gap-y-8'>
              <h3 className='text-[40px] md:text-[60px] font-medium text-[#2C2844]'>
                400+
              </h3>
              <span className='text-2xl text-black/70'>Distributors</span>
            </div>
            <div className='flex flex-col items-center gap-y-8'>
              <h3 className='text-[40px] md:text-[60px] font-medium text-[#2C2844]'>
                10
              </h3>
              <span className='text-2xl text-black/70'>Labs</span>
            </div>
          </div>
        </section>
      </Group>
      <Group key='patent'>
        <section className='w-full'>
          <div className='max-w-[1040px] w-full mx-auto flex max-md:flex-col items-center justify-between py-[120px]'>
            <div className='w-full md:w-[500px] h-[420px] rounded-lg overflow-clip'>
              <img src='/5.jpg' className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col max-w-[440px] gap-y-10 max-md:px-6 max-md:mt-10'>
              <h2 className='text-3xl md:text-5xl font-medium'>
                All Our Products Have{' '}
                <span className='text-[#CDA091]'>Patented</span> Technology
              </h2>
              <p className='text-black/70 text-lg md:text-xl'>
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
      <Group key='glow'>
        <section className='flex flex-col w-full'>
          <h1 className='text-2xl md:text-[64px] font-medium text-[#EABEAF] text-center'>
            Glow from within, sun-kissed confidence
          </h1>
          <div className='w-full flex items-center mt-[60px]'>
            <div className='w-full md:w-1/2 h-[400px] md:h-[800px]'>
              <img
                src='https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?q=80&w=3715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='w-full h-full object-cover'
              />
            </div>
            <div className='max-md:hidden w-1/2 h-[800px]'>
              <img
                src='https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=3527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='w-full h-full object-cover '
              />
            </div>
          </div>
        </section>
      </Group>
    </div>
  );
};
