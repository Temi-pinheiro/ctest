export const Details = () => {
  return (
    <div className='flex flex-col px-[10px]'>
      <h4 className='md:text-xl font-medium'>Ingredients</h4>
      <p className='max-md:text-sm text-black/70'>
        Lorem ipsum, dolor sit amet consectetur, Proin cras, vitae nisi
        dignissim, blandit. Enim, vitae egestas, impetellus & mauris.
      </p>

      <div className='grid md:grid-cols-3 mt-12 gap-x-10'>
        <div className='flex flex-col items-center px-5 gap-y-6 h-full py-3 rounded-md'>
          <h5 className='text-xl font-medium border-b pb-2 w-full text-center'>
            Usage
          </h5>
          <p className='max-md:text-sm text-black/70'>
            Lorem ipsum dolor sit amet consectetur, Proin cras, vitae nisi
            dignissim blandit. Enim, vitae egestas impetellus mauris.
          </p>
        </div>
        <div className='flex flex-col items-center px-5 gap-y-6 h-full py-3 rounded-md'>
          <h5 className='text-xl font-medium border-b pb-2 w-full text-center'>
            Benefits
          </h5>
          <ul className='max-md:text-sm text-black/70 flex flex-col gap-y-2'>
            <li>Benefit 1 vitae nisi dignissim bland suror </li>
            <li>Benefit 2 vitae nisi sutor pregomati</li>
            <li>Benefit 3 tutor nisi dignissim</li>
            <li>
              Benefit 4 nisi dignissim blandit. Enim, vitae egestas impetellus
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center px-5 gap-y-6 h-full py-3 rounded-md'>
          <h5 className='text-xl font-medium border-b pb-2 w-full text-center'>
            Additional Info
          </h5>
          <p className='max-md:text-sm text-black/70 flex flex-col gap-y-5 items-start text-left w-full'>
            <span>
              <span className='font-bold'>Weight:</span> 0.5kg{' '}
            </span>
            <span>
              {' '}
              <span className='font-bold'>Size:</span> 500ml/16.9oz
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
