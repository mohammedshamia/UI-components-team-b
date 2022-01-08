import React from 'react';
import Markdown from '../../../components/layoutComponent/Markdown';
import Loadable from '../../../routes/Loading';
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

export default Loadable(React.lazy(Docs as any));
