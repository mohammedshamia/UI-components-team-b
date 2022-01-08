import React, { lazy } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useRoutes,
} from 'react-router-dom';
import Loadable from './Loading';

const WelcomeScreen = Loadable(lazy(() => import('../pages/WelcomeScreen')));
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
        // { path: '/', element: <Navigate to="components/rating" replace /> },
        { path: 'rating', element: <RatingPage /> },
        { path: 'typography', element: <TypographyPage /> },
        { path: 'avatars', element: <AvatarsPage /> },
        { path: 'card', element: <CardPage /> },
        {
          path: 'autocomplete',
          element: <AutocompletePage />,
        },
        { path: '404', element: <Navigate to="/404" replace /> },
        // { path: '*', element: <PageNotFound /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
  // return (
  //   <>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<WelcomeScreen />} />
  //         <Route path="/components/*" element={<MainPage />} />
  //         <Route path="404" element={<div>page not found 404 </div>} />
  //       </Routes>
  //       {/* {AllRoutesItems} */}
  //     </BrowserRouter>
  //   </>
  // );
};

export default AllRoutes;
