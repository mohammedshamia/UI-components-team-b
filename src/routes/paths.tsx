import { lazy } from 'react';
import Loadable from './Loading';

const RatingPage = Loadable(
  lazy(() => import('../pages/Components/RatingPage')),
);
const CardPage = Loadable(lazy(() => import('../pages/Components/CardPage')));
const AvatarsPage = Loadable(
  lazy(() => import('../pages/Components/AvatarsPage')),
);
const TypographyPage = Loadable(
  lazy(() => import('../pages/Components/TypographyPage')),
);
const AutocompletePage = Loadable(
  lazy(() => import('../pages/Components/AutocompletePage')),
);

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
    element: <CardPage />,
  },
  {
    path: 'typography',
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
    element: <TypographyPage />,
  },
  {
    path: 'avatars',
    items: [
      {
        label: 'Image avatars',
        toId: '#image',
      },
      {
        label: 'Letter avatars',
        toId: '#letter-avatars',
      },
      {
        label: 'Sizes',
        toId: '#sizes',
      },
      {
        label: 'Variants',
        toId: '#variants',
      },
      {
        label: 'Avatar Group',
        toId: '#group',
      },
      {
        label: 'Avatar With badge',
        toId: '#badge',
      },

      {
        label: 'Api props',
        toId: '#api',
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
    element: <AutocompletePage />,
  },
];

export default paths;
