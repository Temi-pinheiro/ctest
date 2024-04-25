import { useLayoutEffect } from 'react';
import { Footer, MobileNav, NavBar, ScrollingNav } from '../../components';
import { MobileFooter } from '../../components/Footer/mobile';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import ModalProvider from '../../providers/ModalProvider';

export const AppLayout = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      new LocomotiveScroll();
    })();
  }, []);
  return (
    <div className='w-full h-full'>
      <ScrollRestoration key={pathname} />
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
