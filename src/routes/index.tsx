import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loadable from './Loading';

const HomePage = Loadable(lazy(() => import('../pages/HomePage')));
const MainPage = Loadable(lazy(() => import('../pages/MainPage')));

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components/*" element={<MainPage />} />
        <Route path="*" element={<div>page not found 404 </div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
