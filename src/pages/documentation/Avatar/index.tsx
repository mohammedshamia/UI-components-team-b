import React from 'react';
import { Markdown } from '../../../components';
import { AvatarExample, LetterAvatar } from './AvatarExamples';

import avatarDoc from './doc';

const Docs: React.FC<any> = () => {
  return (
    <Markdown
      content={avatarDoc}
      examples={{
        example1: LetterAvatar,
        example2: AvatarExample,
      }}
    />
  );
};

export default Docs;
