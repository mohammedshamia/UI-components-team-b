import { lazy } from 'react';
import Loadable from './Loading';

const RatingPage = Loadable(
  lazy(() => import('../pages/Components/RatingPage')),
);
const AutoCompletePage = Loadable(
  lazy(() => import('../pages/Components/AutocompletePage')),
);

const AvatarsPage = Loadable(
  lazy(() => import('../pages/Components/AvatarsPage')),
);
// const TypographyPage = Loadable(lazy(() => import('../pages/Typography')));

const paths = [
  {
    path: 'rating',
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
    element: <RatingPage />,
  },
  {
    path: 'avatar',
    items: [
      {
        label: 'Avatar Group',
        toId: '#Avatar Group',
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
    element: <AvatarsPage />,
  },
  {
    path: 'autocomplete',
    items: [
      {
        label: 'Combo box',
        toId: '#combo-box',
      },
      {
        label: 'Playground',
        toId: '#playground',
      },
      {
        label: 'Country select',
        toId: '#country-select',
      },
      {
        label: 'Free solo',
        toId: '#free-solo',
      },
      {
        label: 'Icons',
        toId: '#icons',
      },
      {
        label: 'Validation',
        toId: '#validation',
      },
    ],
    element: <AutoCompletePage />,
  },
];

export default paths;
