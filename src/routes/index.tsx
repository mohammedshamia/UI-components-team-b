import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import RatingPage from '../pages/Components/RatingPage';
import Loadable from './Loading';

const WelcomeScreen = Loadable(lazy(() => import('../pages/WelcomeScreen')));
// const LandingPage = Loadable(lazy(() => import('../pages/WelcomeScreen')));
const MainPage = Loadable(lazy(() => import('../pages/MainPage')));
// const RatingPage = Loadable(
//   lazy(() => import('../pages/documentation/Rating')),
// );
const TypographyPage = Loadable(
  lazy(() => import('../pages/documentation/Typography')),
);
const AutocompletePage = Loadable(
  lazy(() => import('../pages/documentation/AutoComplete')),
);
const CardPage = Loadable(lazy(() => import('../pages/documentation/Card')));
const AvatarsPage = Loadable(
  lazy(() => import('../pages/documentation/Avatar')),
);
const InstallPage = Loadable(
  lazy(() => import('../pages/documentation/Installation')),
);
const PageNotFound = Loadable(lazy(() => import('../pages/NotFound')));

const AllRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <WelcomeScreen />,
    },
    {
      path: '/components',
      element: <MainPage />,
      children: [
        { path: 'rating', element: <RatingPage /> },
        { path: 'typography', element: <TypographyPage /> },
        { path: 'avatar', element: <AvatarsPage /> },
        { path: 'card', element: <CardPage /> },
        { path: 'autocomplete', element: <AutocompletePage /> },
      ],
    },
    {
      path: '/getting-started',
      element: <MainPage />,
      children: [
        { path: 'about', element: <RatingPage /> },
        { path: 'installation', element: <InstallPage /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
    { path: '404', element: <PageNotFound /> },
  ]);
};

export default AllRoutes;
