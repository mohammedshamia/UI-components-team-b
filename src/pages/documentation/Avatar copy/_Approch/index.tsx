import React from 'react';
import docs from './RatingDocs';
import * as Components from '../../../../components';

export const AvatarDocs: React.FC<any> = () => {
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
