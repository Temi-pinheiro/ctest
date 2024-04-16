import { AppLayout } from '../layouts';
import { AboutUsPage, ShopPage } from '../pages';
import { HomePage } from '../pages/Home';

export const AppRoutes = [
  {
    path: '/',
    errorElement: '',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage />, errorElement: '' },
      { path: '/about-us', element: <AboutUsPage />, errorElement: '' },
      { path: '/shop', element: <ShopPage />, errorElement: '' },
    ],
  },
];
