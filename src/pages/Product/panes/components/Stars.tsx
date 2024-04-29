export const Stars = ({
  rating,
  setRating,
  disabled,
}: {
  rating: number;
  setRating?: (v: number) => void;
  disabled?: boolean;
}) => {
  const stars = new Array(5).fill('star');
  return (
    <div className='flex items-center gap-x-1'>
      {stars?.map((_, index) => (
        <button
          key={index}
          style={{
            fill: rating >= index + 1 ? '#F83C22' : undefined,
            pointerEvents: disabled ? 'none' : undefined,
          }}
          onClick={() => setRating?.(index + 1)}
          disabled={disabled}
          className='transition duration-100 ease-in-out hover:fill-[#F83C22] fill-white'
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
            className='transition duration-200 ease-in-out'
          >
            <path
              className='transition duration-200 ease-in-out'
              d='M8.29303 1.94458L9.51146 4.7739C9.70243 5.21734 10.1204 5.52101 10.6011 5.56559L13.6685 5.85008C13.9473 5.87594 14.0599 6.22269 13.8496 6.40746L11.5353 8.44057C11.1725 8.75921 11.0129 9.25056 11.1191 9.72155L11.7964 12.7267C11.8579 12.9998 11.563 13.2141 11.3222 13.0712L8.67345 11.4984C8.25832 11.2519 7.74168 11.2519 7.32655 11.4984L4.67778 13.0712C4.43705 13.2141 4.14209 12.9998 4.20365 12.7267L4.88095 9.72155C4.9871 9.25056 4.82745 8.75921 4.46473 8.44057L2.1504 6.40746C1.94007 6.22268 2.05273 5.87594 2.33151 5.85008L5.39887 5.56559C5.87961 5.52101 6.29758 5.21734 6.48854 4.7739L7.70697 1.94458C7.81771 1.68744 8.18229 1.68744 8.29303 1.94458Z'
              fill='inherit'
              stroke='#F83C22'
            />
          </svg>
        </button>
      ))}
    </div>
  );
};
