import React from 'react';
import ReactDOM from 'react-dom';
import {
  AvatarExample,
  AvatarGroupExample,
  AvatarWithBadge,
  AvatarWithSizes,
  AvatarWithVariant,
  LetterAvatar,
} from '../pages/documentation/Avatar/AvatarExamples';

ReactDOM.render(
  <React.StrictMode>
    <AvatarExample />
    <AvatarGroupExample />
    <AvatarWithBadge />
    <AvatarWithSizes />
    <AvatarWithVariant />
    <LetterAvatar />
  </React.StrictMode>,
  document.getElementById('root'),
);
