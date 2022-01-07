import React from 'react';
import docs from './avatarDocs';
import * as Components from '../../../components';

interface IAvatarDocsProps {
  [key: string]: any;
}

export const AvatarDocs: React.FC<IAvatarDocsProps> = () => {
  return (
    <>
      {docs.map(({ type, ...props }: DocsProps, index) =>
        React.cloneElement(
          Components[type]({ key: index.toString(), ...(props as any) }) as any,
        ),
      )}
    </>
  );
};

export default AvatarDocs;
