import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
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
// const CardPage = Loadable(lazy(() => import('../pages/documentation/Card')));
const AvatarsPage = Loadable(
  lazy(() => import('../pages/documentation/Avatar')),
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
        // { path: 'rating', element: <RatingPage /> },
        { path: 'avatar', element: AvatarsPage },
        { path: 'typography', element: TypographyPage },
        {
          path: 'autocomplete',
          element: AutocompletePage,
        },
        // { path: 'card', element: <CardPage /> },
        { path: '404', element: <Navigate to="/404" replace /> },
        // { path: '*', element: <PageNotFound /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};

export default AllRoutes;
