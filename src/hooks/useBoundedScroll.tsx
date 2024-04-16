'use client';

import { useMotionValue, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import { clamp } from '../helper/clamp';

export function useBoundedScroll(threshold: number) {
  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);

  useEffect(() => {
    return scrollY.on('change', (current) => {
      const previous = scrollY.getPrevious();
      const diff = current - previous!;
      const newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
    });
  }, [threshold, scrollY, scrollYBounded]);
  return { scrollYBounded, scrollY };
}
