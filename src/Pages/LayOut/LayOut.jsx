import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ScrollButton from '../../Components/BackToTop/ScrollButton';
function LayOut(props) {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default LayOut;
