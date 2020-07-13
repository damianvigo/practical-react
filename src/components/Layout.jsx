import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div ClassName='App'>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
