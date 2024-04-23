'use client';
import { useToaster } from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';

export const ToastNotifications = () => {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause, calculateOffset, updateHeight } = handlers;
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 200,
        top: 15,
        right: 0,
      }}
      className='flex w-full justify-center'
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      <AnimatePresence>
        {toasts.map((t: any) => {
          const offset = calculateOffset(t, {
            gutter: 8,
          });
          const ref = (el: HTMLDivElement) => {
            if (el && typeof t.height !== 'number') {
              const height = el.getBoundingClientRect().height;
              updateHeight(t.id, height);
            }
          };
          return (
            <motion.div
              key={t.id}
              ref={ref}
              style={{
                position: 'absolute',
                top: 0,
                right: 15,
                transformOrigin: 'center',
                background:
                  t.type == 'error'
                    ? '#FCDCDD'
                    : t.type == 'success' && '#DAEEDA',

                borderColor:
                  t.type == 'error'
                    ? '#F14E53'
                    : t.type == 'success' && '#44AB47',
              }}
              initial={{
                opacity: 0,
                y: 100 - offset,
                x: window.innerWidth + 20,
              }}
              animate={{
                opacity: t.visible ? 1 : 0,
                y: 10 + offset,
                x: 0,
                transition: {
                  x: {
                    // delay: 0.1,
                    type: 'tween',
                    ease: [0.4, 0.0, 0.2, 1],
                    duration: 0.3,
                  },
                  opacity: { delay: 0.2, duration: 0.4 },
                },
              }}
              exit={{ opacity: 0, y: '100%', x: window.innerWidth + 20 }}
              className='bg-black pt-3 pb-4 pl-4 pr-6 rounded-lg gap-x-4 text-sm border flex items-center w-auto max-w-[488px] break-words'
              {...t.ariaProps}
            >
              {t.type == 'success' ? (
                <SuccessIcon />
              ) : (
                t.type == 'error' && <ErrorIcon />
              )}
              <div className='flex flex-col gap-y-1'>
                <span className='w-full text-sm text-[#717070] block'>
                  {t.message}
                </span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

const SuccessIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0C3.58 0 0 3.58 0 8ZM11.29 5.29C11.47 5.11 11.72 5 12 5C12.55 5 13 5.45 13 6C13 6.28 12.89 6.53 12.71 6.71L7.71 11.71C7.53 11.89 7.28 12 7 12C6.72 12 6.47 11.89 6.29 11.71L3.29 8.71C3.11 8.53 3 8.28 3 8C3 7.45 3.45 7 4 7C4.28 7 4.53 7.11 4.71 7.29L7 9.59L11.29 5.29Z'
      fill='#44AB47'
    />
  </svg>
);

const ErrorIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.99989 0.00500488C3.58265 0.00500488 0.00488281 3.58277 0.00488281 8.00001C0.00488281 12.4172 3.58265 15.995 7.99989 15.995C12.4171 15.995 15.9949 12.4172 15.9949 8.00001C15.9949 3.58277 12.4171 0.00500488 7.99989 0.00500488ZM7.00051 12.9969V10.9981H8.99926V12.9969H7.00051ZM7.00051 3.00313V9.99876H8.99926V3.00313H7.00051Z'
      fill='#F14E53'
    />
  </svg>
);
