import React from 'react';
import { createBrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import ErrorPage from '../Pages/error-page';
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
