import { AppLayout } from '../layouts';
import { AboutUsPage, ProductPage, ShopPage } from '../pages';
import { HomePage } from '../pages/Home';

export const AppRoutes = [
  {
    path: '/',
    errorElement: '',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage />, errorElement: '' },
      {
        exact: true,
        path: '/about-us',
        element: <AboutUsPage />,
        errorElement: '',
      },
      { exact: true, path: '/shop', element: <ShopPage />, errorElement: '' },
      { path: '/shop/:id', element: <ProductPage />, errorElement: '' },
    ],
  },
];
