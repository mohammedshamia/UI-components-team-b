// import { lazy } from 'react';
// import Loadable from './Loading';

// const RatingPage = Loadable(lazy(() => import('../pages/Rating')));
// const TypographyPage = Loadable(lazy(() => import('../pages/Typography')));

const paths = [
  // {
  //   path: 'rating',
  //   subPath: ['#tag1', '#tag2'],
  //   element: <RatingPage />,
  // },
  // {
  //   path: 'typography',
  //   subPath: ['#tag1', '#tag2'],
  //   element: <TypographyPage />,
  // },
  {
    path: 'card',
    subPath: ['#tag1', '#tag2'],
    element: <p>rating</p>,
  },
  {
    path: 'avatars',
    subPath: ['#tag1', '#tag2'],
    element: () => <p>rating</p>,
  },
  {
    path: 'autocomplete',
    subPath: ['#tag1', '#tag2'],
    element: <p>autocomplete</p>,
  },
];

export default paths;
