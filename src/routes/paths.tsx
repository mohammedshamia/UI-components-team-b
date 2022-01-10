import { lazy } from 'react';
import AutocompletePage from '../pages/Components/AutocompletePage';
import AvatarsPage from '../pages/Components/AvatarsPage';
import TypographyPage from '../pages/Components/TypographyPage';
import InstallationPage from '../pages/Components/installPage';
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
        label: 'Sizes',
        toId: '#sizes',
      },
      {
        label: 'Customization',
        toId: '#customization',
      },
      {
        label: 'api',
        toId: '#api',
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
        label: 'Accessibility',
        toId: '#accessibility',
      },
      {
        label: 'Colors',
        toId: '#colors',
      },
      {
        label: 'FontSize',
        toId: '#fontSize',
      },
      {
        label: 'Theme',
        toId: '#theme',
      },
      {
        label: 'Api props',
        toId: '#api',
      },
    ],
    element: <TypographyPage />,
  },
  {
    path: 'avatar',
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
        toId: '#avatar-sizes',
      },
      {
        label: 'Variants',
        toId: '#avatar-variants',
      },
      {
        label: 'Avatar Group',
        toId: '#avatar-group',
      },
      {
        label: 'Avatar With badge',
        toId: '#avatar-badge',
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
      {
        label: 'Api props',
        toId: '#api',
      },
    ],
    element: <AutocompletePage />,
  },
  {
    path: 'installation',
    items: [
      {
        label: 'Features',
        toId: '#features',
      },
      {
        label: 'Quick start',
        toId: '#quick-start',
      },
    ],
    element: <InstallationPage />,
  },
];

export default paths;
