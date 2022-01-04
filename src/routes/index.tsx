import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rating from '../components/baseComponent/Rating';
import Loadable from './Loading';

const HomePage = Loadable(lazy(() => import('../pages/HomePage')));
const MainPage = Loadable(lazy(() => import('../pages/MainPage')));

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Rating isRow />
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/app" element={MainPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
