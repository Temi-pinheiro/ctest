export const HealthClaims = () => {
  return (
    <section className='w-full bg-gradient-to-r from-[#F2D8CF]/50 via-[#F2D8CF] to-[#F2D8CF]/50'>
      <div className='py-[200px] max-md:px-6 flex flex-col items-center text-center w-full max-w-[768px] mx-auto px-20'>
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
        <p className='mt-6 text-black/70 leading-[180%] md:text-lg'>
          COWAS International Trading Limited does not make any health claims
          about its products. Vaginne Allure Intimate Care Product should not be
          prescribed as medicine and the company shall not be held liable for
          the medical claims made by its customers.
        </p>
        <span className='mt-6 text-black/70 leading-[180%] font-semibold'>
          Please be guided accordingly.
        </span>
      </div>
    </section>
  );
};
