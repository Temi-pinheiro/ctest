import { useLayoutEffect, useState } from 'react';
import { Group } from '../../components';
import { wrap } from 'popmotion';
import { motion } from 'framer-motion';
import { fadeIn } from '../../constants/framer';
export const Reviews = () => {
  const [active, setActive] = useState(0);

  const pane_index = wrap(0, 6, active);

  const testimonials = [
    {
      name: 'Alice Smith',
      role: 'Marketing Manager',
      short: 'Amazing',
      testimony:
        'Using this health care product has completely transformed my energy levels. I feel revitalized every day!',
    },
    {
      name: 'Jane Dove',
      short: 'Loved it',
      role: 'Software Engineer',
      testimony:
        'As someone who spends long hours at a desk, this product has been a game-changer for my overall well-being. I feel more focused and alert.',
    },
    {
      name: 'Emily Brown',
      role: 'Teacher',
      short: 'Extraordinary',
      testimony:
        "Teaching can be exhausting, but since starting this health care product, I've noticed a significant improvement in my stamina and mood.",
    },
    {
      name: 'Alicia Johnson',
      short: 'Unbelievable',

      role: 'Athlete',
      testimony:
        "I rely on my body's peak performance, and this product helps me recover faster after intense workouts. I feel stronger and more resilient.",
    },
    {
      name: 'Sarah Williams',
      short: 'Must have',

      role: 'CEO',
      testimony:
        'Balancing a demanding career and personal life is tough, but thanks to this health care product, I feel more energetic and ready to tackle any challenge.',
    },
    {
      name: 'Rasheeda Frank',
      short: 'Extraordinary',

      role: 'Artist',
      testimony:
        'Creativity requires a clear mind and boundless energy. This product has unlocked new levels of inspiration and vitality in my work.',
    },
  ];
  useLayoutEffect(() => {
    setTimeout(() => {
      setActive((prev) => prev + 1);
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pane_index, setActive]);
  return (
    <Group key='reviews'>
      <section className='bg-[#F9F9F9]'>
        <div className='max-w-[956px] w-full flex max-md:flex-col items-center py-[110px] mx-auto justify-between'>
          <div className='flex flex-col max-w-[376px] items-center w-full max-md:px-6'>
            <h3 className='text-[30px]'>Customer Reviews</h3>
            <motion.div
              variants={fadeIn}
              animate='animate'
              initial='initial'
              key={pane_index}
              className='flex flex-col items-center'
            >
              <span className='italic text-2xl font-semibold mt-6'>
                "{testimonials[pane_index].short}"
              </span>

              <p className='text-center italic text-black/70 mt-4'>
                “{testimonials[pane_index].testimony}”
              </p>
              <div className='flex items-center flex-col mt-9'>
                <h6>{testimonials[pane_index].name}</h6>
                <span className='text-sm text-black/50'>
                  {testimonials[pane_index].role}
                </span>
              </div>
            </motion.div>
          </div>
          <div className='max-md:hidden max-w-[400px] w-full grid grid-cols-3 gap-x-[42px] gap-y-[72px] '>
            {testimonials.map((test, index) => (
              <div
                style={{ opacity: pane_index == index ? 1 : 0.4 }}
                className='transition-opacity duration-200 ease-in-out flex flex-col items-center gap-y-1 text-center'
              >
                {/* <div className='w-[100px] h-[100px] rounded overflow-clip bg-[#888888] text-white text-4xl font-semibold flex items-center justify-center'>
                  {test.name[0]}
                  {test.name.split(' ')?.[1]?.[0]}
                </div> */}
                <span className=' text-xl text-black/60'>{test.name}</span>

                <span className='italic font-semibold'>"{test.short}"</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Group>
  );
};
