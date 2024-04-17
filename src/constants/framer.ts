export const accordionVariants = {
  open: { opacity: 1, height: 'auto', transition: { opacity: { delay: 0.3 } } },
  collapsed: { opacity: 0, height: 0 },
};

export const swiperVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0 },
};

export const dropdown = {
  initial: {
    display: 'none',
    opacity: 0,
    y: -80,
    scale: 0.6,
  },
  exit: {
    display: 'none',
    opacity: 0,
    y: -80,
    scale: 0.6,
    transition: { display: { delay: 0.1 } },
  },
  animate: (custom?: number) => ({
    display: 'block',
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      opacity: { delay: custom ? custom : 0.2 },
      y: { delay: custom ? custom : 0.2 },
      scale: { delay: custom ? custom : 0.2 },
    },
  }),
};
