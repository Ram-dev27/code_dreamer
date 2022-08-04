import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
