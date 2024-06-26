import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ToastNotifications } from './components/UI';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider, CartProvider } from './providers';
import CombinedRoutes from './routes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastNotifications } from './components';

const router = createBrowserRouter([...CombinedRoutes]);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 48, // 48 hours
      retry(failureCount: number) {
        return failureCount == 1;
      },
      // refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ToastNotifications />
        <AuthProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </AuthProvider>
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
