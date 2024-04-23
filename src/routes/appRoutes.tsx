import { AppLayout } from '../layouts';
import {
  AboutUsPage,
  BagPage,
  ErrorPage,
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
    errorElement: <ErrorPage />,
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage />, errorElement: <ErrorPage /> },
      {
        exact: true,
        path: '/about-us',
        element: <AboutUsPage />,
        errorElement: <ErrorPage />,
      },
      {
        exact: true,
        path: '/shop',
        element: <ShopPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/shop/:id',
        element: <ProductPage />,
        errorElement: <ErrorPage />,
      },
      { path: '/terms', element: <TermsPage />, errorElement: <ErrorPage /> },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicyPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/returns',
        element: <ReturnsPolicyPage />,
        errorElement: <ErrorPage />,
      },
      { path: '/bag', element: <BagPage />, errorElement: <ErrorPage /> },
      {
        path: '/wishlist',
        element: <WishlistPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
];
