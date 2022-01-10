import React from 'react';
import { Icon } from './styles';

const SidebarData = [
  {
    title: 'Installation',
    path: '/getting-started/installation',
    icon: (
      <Icon
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="ArticleRoundedIcon"
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 14H8c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1zm3-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z" />
      </Icon>
    ),
  },
  {
    title: 'Components',
    path: '#',
    icon: (
      <Icon
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 20"
        data-testid="ToggleOffRoundedIcon"
      >
        <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      </Icon>
    ),
    iconClosed: (
      <Icon
        width="1em"
        focusable="true"
        aria-hidden="true"
        viewBox="0 0 24 20"
        data-testid="KeyboardArrowRightRoundedIcon"
      >
        <path d="M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z" />
      </Icon>
    ),
    iconOpened: (
      <Icon width="1em" viewBox="0 0 24 20">
        <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
      </Icon>
    ),

    subNav: [
      {
        title: 'Autocomplete',
        path: '/components/autocomplete',
        cName: 'sub-nav',
      },
      {
        title: 'Avatar',
        path: '/components/avatar',
        cName: 'sub-nav',
      },
      {
        title: 'Card',
        path: '/components/card',
      },
      {
        title: 'Rating',
        path: '/components/rating',
      },
      {
        title: 'Typography',
        path: '/components/typography',
      },
    ],
  },
];

export default SidebarData;
