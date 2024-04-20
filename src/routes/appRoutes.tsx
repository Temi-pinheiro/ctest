import { AppLayout } from '../layouts';
import {
  AboutUsPage,
  BagPage,
  PrivacyPolicyPage,
  ProductPage,
  ReturnsPolicyPage,
  ShopPage,
  TermsPage,
  WishlistPage,
} from '../pages';
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
      { path: '/terms', element: <TermsPage />, errorElement: '' },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicyPage />,
        errorElement: '',
      },
      { path: '/returns', element: <ReturnsPolicyPage />, errorElement: '' },
      { path: '/bag', element: <BagPage />, errorElement: '' },
      { path: '/wishlist', element: <WishlistPage />, errorElement: '' },
    ],
  },
];
