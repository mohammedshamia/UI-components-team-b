/* eslint-disable react/react-in-jsx-scope */
import { lazy } from 'react';
import Loadable from './Loading';

const RatingPage = Loadable(lazy(() => import('../pages/Rating')));
const TypographyPage = Loadable(lazy(() => import('../pages/Typography')));

const paths = [
  {
    name: 'rating',
    subPath: ['#tag1', '#tag2'],
    element: <RatingPage />,
  },
  {
    name: 'typography',
    subPath: ['#tag1', '#tag2'],
    element: <TypographyPage />,
  },
  {
    name: 'card',
    subPath: ['#tag1', '#tag2'],
    element: <p>rating</p>,
  },
  {
    name: 'avatars',
    subPath: ['#tag1', '#tag2'],
    element: () => <p>rating</p>,
  },
  {
    name: 'autocomplete',
    subPath: ['#tag1', '#tag2'],
    element: <p>autocomplete</p>,
  },
];

export default paths;
