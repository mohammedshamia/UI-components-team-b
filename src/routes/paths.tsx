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
    items: [
      {
        label: 'Basic rating',
        toId: '#basic-rating',
      },
      {
        label: 'Rating precision',
        toId: '#rating-precision',
      },
      {
        label: 'Hover feedback',
        toId: '#hover-feedback',
      },
      {
        label: 'Customization',
        toId: '#customization',
      },
      {
        label: 'Radio group',
        toId: '#radio-group',
      },
      {
        label: 'Accessibility',
        toId: '#accessibility',
      },
      {
        label: 'ARIA',
        toId: '#accessibility',
      },
      {
        label: 'keyboard',
        toId: '#keyboard',
      },
    ],
    element: <p>rating</p>,
  },
  {
    path: 'avatars',
    items: [
      {
        label: 'Basic rating',
        toId: '#basic-rating',
      },
      {
        label: 'Rating precision',
        toId: '#rating-precision',
      },
      {
        label: 'Hover feedback',
        toId: '#hover-feedback',
      },
      {
        label: 'Customization',
        toId: '#customization',
      },
      {
        label: 'Radio group',
        toId: '#radio-group',
      },
      {
        label: 'Accessibility',
        toId: '#accessibility',
      },
      {
        label: 'ARIA',
        toId: '#accessibility',
      },
      {
        label: 'keyboard',
        toId: '#keyboard',
      },
    ],
    element: () => <p>rating</p>,
  },
  {
    path: 'autocomplete',
    items: [
      {
        label: 'Basic rating',
        toId: '#basic-rating',
      },
      {
        label: 'Rating precision',
        toId: '#rating-precision',
      },
      {
        label: 'Hover feedback',
        toId: '#hover-feedback',
      },
      {
        label: 'Customization',
        toId: '#customization',
      },
      {
        label: 'Radio group',
        toId: '#radio-group',
      },
      {
        label: 'Accessibility',
        toId: '#accessibility',
      },
      {
        label: 'ARIA',
        toId: '#accessibility',
      },
      {
        label: 'keyboard',
        toId: '#keyboard',
      },
    ],
    element: <p>autocomplete</p>,
  },
];

export default paths;
