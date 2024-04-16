'use client';
import { useEffect } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export const NavLink = ({
  paths,
  label,
}: {
  paths: {
    external?: boolean;
    label: string;
    to: string;
    desc?: string;
  }[];
  label: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [overBody, setOverBody] = useState(false);

  const getMouseToLeave = () => {
    !overBody && setIsHovering(false);
    // e.bubbles(true);
  };

  const staying = () => {
    setOverBody(true);
    setIsHovering(true);
  };

  const getMouseToStay = () => {
    setIsHovering(true);
    setOverBody(true);

    setOverBody(false);
  };

  const leaving = () => {
    setOverBody(false);
    setIsHovering(false);
  };
  useEffect(() => {
    setIsHovering(false);
  }, []);
  return (
    <motion.button
      type='button'
      // onMouseEnter={() => setOverBody(true)}
      onBlur={() => setIsHovering(false)}
      onClick={() => setIsHovering(true)}
      className={styles.container}
    >
      <motion.span
        className='flex items-center gap-x-2 py-2'
        onMouseEnter={getMouseToStay}
        onMouseLeave={getMouseToLeave}
      >
        {label}
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='black'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M13.7071 4.79289C14.0976 5.18342 14.0976 5.81658 13.7071 6.20711L8.70711 11.2071C8.31658 11.5976 7.68342 11.5976 7.29289 11.2071L2.29289 6.20711C1.90237 5.81658 1.90237 5.18342 2.29289 4.79289C2.68342 4.40237 3.31658 4.40237 3.70711 4.79289L8 9.08579L12.2929 4.79289C12.6834 4.40237 13.3166 4.40237 13.7071 4.79289Z'
            fill='inherit'
          />
        </svg>
      </motion.span>
      <AnimatePresence mode='wait'>
        {isHovering ? (
          <motion.div
            initial={{ opacity: 0, display: 'none', zIndex: 10 }}
            animate={{
              opacity: 1,
              display: 'flex',
            }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.05 }}
            onMouseEnter={staying}
            onMouseLeave={leaving}
            onBlur={() => setIsHovering(false)}
            className={styles.links}
          >
            <div
              className={styles.flex_container}
              onClick={() => setIsHovering(false)}
            >
              {paths.map((sub, index) => (
                <Link
                  to={sub.to}
                  className={styles.sub_label}
                  key={`${sub.label} ${index}`}
                >
                  <p className={styles.details}>{sub.label}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.button>
  );
};
