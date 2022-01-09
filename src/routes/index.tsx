import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import PageNotFound from '../pages/NotFound';
import Loadable from './Loading';

const WelcomeScreen = Loadable(lazy(() => import('../pages/WelcomeScreen')));
// const LandingPage = Loadable(lazy(() => import('../pages/WelcomeScreen')));
const MainPage = Loadable(lazy(() => import('../pages/MainPage')));
const RatingPage = Loadable(
  lazy(() => import('../pages/Components/RatingPage')),
);
const TypographyPage = Loadable(
  lazy(() => import('../pages/Components/TypographyPage')),
);
const AutocompletePage = Loadable(
  lazy(() => import('../pages/Components/AutocompletePage')),
);
const CardPage = Loadable(lazy(() => import('../pages/Components/CardPage')));
const AvatarsPage = Loadable(
  lazy(() => import('../pages/Components/AvatarsPage')),
);
// const PageNotFound = Loadable(lazy(() => import('../pages/NotFound')));

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
        // { path: '/', element: <Navigate to="components/rating" replace /> },
        { path: 'rating', element: <RatingPage /> },
        { path: 'typography', element: <TypographyPage /> },
        { path: 'avatars', element: <AvatarsPage /> },
        { path: 'card', element: <CardPage /> },
        { path: 'autocomplete', element: <AutocompletePage /> },
      ],
    },
    {
      path: '/getting-started',
      element: <MainPage />,
      children: [
        // { path: '/', element: <Navigate to="components/rating" replace /> },
        { path: 'about', element: <RatingPage /> },
        { path: 'install', element: <p>install</p> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
    { path: '404', element: <PageNotFound /> },
  ]);
};

export default AllRoutes;
