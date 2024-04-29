import { AppLayout, SettingsLayout } from '../layouts';
import {
  AboutUsPage,
  // BagPage,
  CheckoutPage,
  ErrorPage,
  PrivacyPolicyPage,
  ProductPage,
  ReturnsPolicyPage,
  ShopPage,
  TermsPage,
  VerifyPaymentPage,
  WishlistPage,
} from '../pages';
import {
  AccountPage,
  OrdersPage,
  ProfilePage,
  ReturnsPage,
  WalletPage,
} from '../pages/account-pages';
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
      { path: '/bag', element: <WishlistPage />, errorElement: <ErrorPage /> },
      {
        path: '/checkout',
        element: <CheckoutPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/verify-booking',
        element: <VerifyPaymentPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/wishlist',
        element: <WishlistPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/my-account',
        exact: true,
        element: <SettingsLayout />,
        errorElement: '',
        children: [
          {
            index: true,
            element: <AccountPage />,
            errorElement: '',
          },
          {
            path: 'profile',
            element: <ProfilePage />,
            errorElement: '',
          },
          {
            path: 'wallet',
            element: <WalletPage />,
            errorElement: '',
          },
          {
            path: 'orders',
            element: <OrdersPage />,
            errorElement: '',
          },

          {
            path: 'returns',
            element: <ReturnsPage />,
            errorElement: '',
          },
        ],
      },
    ],
  },
];
