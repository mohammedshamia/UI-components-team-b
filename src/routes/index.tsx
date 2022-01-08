import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loadable from './Loading';

const LandingPage = Loadable(lazy(() => import('../pages/WelcomeScreen')));
const MainPage = Loadable(lazy(() => import('../pages/MainPage')));

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/components/*" element={<MainPage />} />
        <Route path="*" element={<div>page not found 404 </div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
