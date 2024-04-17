import { Group } from '../components';

export const AboutUsPage = () => {
  return (
    <div className='flex min-h-screen flex-col pt-20'>
      <section className='h-screen w-full relative'>
        <video
          src='/skin.mp4'
          autoPlay
          muted
          loop
          controls={false}
          className='w-full h-full object-cover'
        />
      </section>

      <Group key='story'>
        <section className='w-full'>
          <div className='max-w-[1040px] w-full mx-auto flex flex-col py-10 md:py-20 max-md:px-6'>
            <h2 className='text-2xl md:text-[40px] font-medium text-[#2C2844]'>
              Our Story
            </h2>
            <p className='text-black/70 max-md:text-sm'>
              Lorem ipsum dolor sit amet consectetur. Faucibus vivamus a non
              nunc sapien. Ridiculus odio quam sit odio tortor mauris viverra.
              Eros in auctor neque ut. Ut pharetra amet tempor adipiscing quam
              consectetur urna mattis sodales. Auctor scelerisque feugiat morbi
              vitae commodo euismod faucibus nam volutpat.
              <br />
              <br />
              In egestas pellentesque sagittis facilisi egestas. Orci a sit
              tortor egestas sed. Ut tincidunt eget cursus sodales praesent cras
              elit non elementum. Aliquet purus ipsum mauris vel ut. Consectetur
              enim risus quis quam diam enim nisi et. Sed dui auctor laoreet
              vitae elit. Nunc interdum consequat egestas ornare nunc. Sapien
              viverra purus non et.
            </p>
          </div>
        </section>
      </Group>
      <Group key='mission'>
        <section className='w-full'>
          <div className='max-w-[1040px] w-full mx-auto flex flex-col py-10 md:py-20 max-md:px-6'>
            <h2 className='text-2xl md:text-[40px] font-medium text-[#2C2844]'>
              Our Mission
            </h2>
            <p className='max-md:text-sm text-black/70'>
              Lorem ipsum dolor sit amet consectetur. Faucibus vivamus a non
              nunc sapien. Ridiculus odio quam sit odio tortor mauris viverra.
              Eros in auctor neque ut. Ut pharetra amet tempor adipiscing quam
              consectetur urna mattis sodales. Auctor scelerisque feugiat morbi
              vitae commodo euismod faucibus nam volutpat.
            </p>
          </div>
        </section>
      </Group>
      <Group key='numbers'>
        <section className='bg-[#F9F9F9] w-full'>
          <div className='py-9 max-w-[895px] w-full mx-auto grid grid-cols-2 gap-y-10 md:grid-cols-4 jusify-between'>
            <div className='flex flex-col items-center gap-y-8'>
              <h3 className='text-[40px] font-medium text-[#2C2844]'>26K+</h3>
              <span className='text-xl text-black/70'>Customers</span>
            </div>
            <div className='flex flex-col items-center gap-y-8'>
              <h3 className='text-[40px] font-medium text-[#2C2844]'>12</h3>
              <span className='text-xl text-black/70'>Countries</span>
            </div>
            <div className='flex flex-col items-center gap-y-8'>
              <h3 className='text-[40px] font-medium text-[#2C2844]'>400+</h3>
              <span className='text-xl text-black/70'>Distributors</span>
            </div>
            <div className='flex flex-col items-center gap-y-8'>
              <h3 className='text-[40px] font-medium text-[#2C2844]'>10</h3>
              <span className='text-xl text-black/70'>Labs</span>
            </div>
          </div>
        </section>
      </Group>
      <Group key='patent'>
        <section className='w-full'>
          <div className='max-w-[1040px] w-full mx-auto flex max-md:flex-col items-center justify-between py-[120px]'>
            <div className='w-full md:w-[500px] h-[420px] rounded-lg overflow-clip'>
              <img
                src='https://plus.unsplash.com/premium_photo-1661597206779-b6643eac8213?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col max-w-[440px] gap-y-10 max-md:px-6 max-md:mt-10'>
              <h2 className='text-2xl font-medium'>
                All Our Products Have{' '}
                <span className='text-[#CDA091]'>Patented</span> Technology
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
      <Group key='glow'>
        <section className='flex flex-col w-full'>
          <h1 className='text-2xl md:text-[40px] font-medium text-[#EABEAF] text-center'>
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
