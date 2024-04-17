/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useSearchParams } from 'react-router-dom';

export const usePanes = (defaultShow: string, key?: string) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const toShow = searchParams.get('show');
  const show = searchParams.get(key ? key : 'show') || defaultShow;
  const handlePaneSwitch = (pane: string) => {
    navigate(key ? `?show=${toShow}&${key}=${pane}` : `?show=${pane}`, {
      replace: true,
    });
  };
  return { show, handlePaneSwitch };
};

import { useLayoutEffect, useRef } from 'react';
export const useOutsideClick = <T extends HTMLElement>(
  handler: (event: any) => void
) => {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const listener = (event: any) => {
      if (!ref?.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
  return ref;
};
