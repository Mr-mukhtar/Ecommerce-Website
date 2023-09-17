// RootLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../StorePage/layout/Header';

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default RootLayout;