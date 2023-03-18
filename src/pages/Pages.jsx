import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import RootLayout from '../components/RootLayout';
import ProductsPage from './ProductsPage';
import Home from './Home';
import ProductDetail from './ProductDetail';
import CartPage from './CartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,

    children: [
      { index: true, element: <Home /> },
      {
        path: '/products',
        element: <ProductsPage />,
      },

      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },

      { path: '*', element: <Navigate to="/" replace={true} /> },
    ],
  },
]);

const Pages = () => {
  return <RouterProvider router={router} />;
};

export default Pages;
