import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Pages/Error/error-page';
import LayOut from '../Pages/LayOut/LayOut';
import publicRouters from './publicRouters.js';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
    errorElement: <ErrorPage />,
    children: [...publicRouters],
  },
]);

export default routers;
