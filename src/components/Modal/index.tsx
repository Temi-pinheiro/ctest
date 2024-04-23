import { motion, AnimatePresence } from 'framer-motion';
import React, { ReactNode, UIEvent, useState } from 'react';
import styles from './styles.module.css';
import { closeModal } from '../../providers';
import { useOutsideClick } from '../../hooks';
const bgVariant = {
  enter: {
    opacity: 0,
  },
  animate: { opacity: 1 },
  exit: {
    opacity: 0,
  },
};

export const Modal = ({
  component,
  setModalOpen,
  id,
}: {
  component?: ReactNode;
  id?: string;
  setModalOpen: (v: boolean) => void;
}) => {
  const close = closeModal();
  const [isOpen, setIsOpen] = useState(true);
  const [bgOpen, setBgOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setBgOpen(false), 120);
    setModalOpen && setModalOpen(false);
    id && setTimeout(() => close(id), 200);
  };
  const additionalProps = {
    close: handleClose,
  };
  const containerRef = useOutsideClick<HTMLDivElement>(handleClickOutside);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleClickOutside(e: any) {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      handleClose();
    }
  }
  return (
    <AnimatePresence key='modal background'>
      {bgOpen && (
        <motion.div
          initial='enter'
          animate='animate'
          exit='exit'
          variants={bgVariant}
          className={styles.background}
        >
          <AnimatePresence mode='wait'>
            {isOpen && (
              <motion.div
                onClick={(e: UIEvent) => e.stopPropagation}
                initial={{ scaleX: 0.5, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                className='max-w-[1440px] w-auto'
                layout
              >
                <div
                  className={styles.container}
                  ref={containerRef}
                  onClick={(e: UIEvent) => e.stopPropagation}
                >
                  {React.isValidElement(component)
                    ? React.cloneElement(component, additionalProps)
                    : component}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
