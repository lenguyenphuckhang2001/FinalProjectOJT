import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function LayOut(props) {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LayOut;
