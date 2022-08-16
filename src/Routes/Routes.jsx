import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../app/layouts/MainLayout';
import BlogPage from '../app/pages/BlogPage/BlogPage';
import HomePage from '../app/pages/Homepage';
import ProductionWithLayout from './ProductionWithLayout';

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductionWithLayout component={HomePage} layout={MainLayout} />} />
        <Route path="/blog" element={<ProductionWithLayout component={BlogPage} layout={MainLayout} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
