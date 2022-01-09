import { lazy } from 'react';
import AutocompletePage from '../pages/Components/AutocompletePage';
import AvatarsPage from '../pages/Components/AvatarsPage';
import TypographyPage from '../pages/Components/TypographyPage';
import Loadable from './Loading';

const RatingPage = Loadable(
  lazy(() => import('../pages/Components/RatingPage')),
);
const CardPage = Loadable(lazy(() => import('../pages/Components/CardPage')));
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
    path: 'card',
    items: [
      {
        label: 'Simple card',
        toId: '#simple-card',
      },
      {
        label: 'Image Card',
        toId: '#image-card',
      },
      {
        label: 'Header Card',
        toId: '#header-card',
      },
      {
        label: 'Size Card',
        toId: '#size-card',
      },
      {
        label: 'Color Card',
        toId: '#color-card',
      },
      {
        label: 'API',
        toId: '#api',
      },
    ],
    element: <CardPage />,
  },
  {
    path: 'typography',
    items: [
      {
        label: 'Typography',
        toId: '#Typography',
      },
      {
        label: 'Colors',
        toId: '#Colors',
      },
      {
        label: 'fontSize',
        toId: '#fontSize',
      },
      {
        label: 'Customization',
        toId: '#customization',
      },
      {
        label: 'Accessibility',
        toId: '#Accessibility',
      },
      {
        label: 'Theme',
        toId: '#Theme',
      },
    ],
    element: <TypographyPage />,
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
    element: <AutocompletePage />,
  },
];

export default paths;
