import { AppLayout } from '../layouts';
import { HomePage } from '../pages/Home';

export const AppRoutes = [
  {
    path: '/',
    errorElement: '',
    element: <AppLayout />,
    children: [{ index: true, element: <HomePage />, errorElement: '' }],
  },
];
