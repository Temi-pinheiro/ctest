import { useLayoutEffect } from 'react';
import { Footer, MobileNav, NavBar, ScrollingNav } from '../../components';
import { MobileFooter } from '../../components/Footer/mobile';
import { Outlet } from 'react-router-dom';
import ModalProvider from '../../providers/ModalProvider';

export const AppLayout = () => {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      new LocomotiveScroll();
    })();
  }, []);
  return (
    <div className='w-full h-full'>
      <ModalProvider>
        <nav className='relative'>
          <MobileNav />
          <NavBar />
          <ScrollingNav />
        </nav>
        <main id='main'>
          <Outlet />
        </main>
        <MobileFooter />
        <Footer />
      </ModalProvider>
    </div>
  );
};
