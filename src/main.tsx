import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from '@/Root';
import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import Dashboard from 'routes/Dashboard';
import Login from 'routes/Login';
import AuthLayout from './layouts/AuthLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            index: true,
            loader: () => redirect('/auth/login'),
          },
          {
            path: 'login',
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
