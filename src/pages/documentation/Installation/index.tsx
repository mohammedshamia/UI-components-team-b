import { useEffect, useState } from 'react';
import { EditPage } from '../../../components/layoutComponent/Container';
import Markdown from '../../../components/layoutComponent/Markdown';

// @ts-ignore
// eslint-disable-next-line import/extensions
import readmePath from './doc.md';

const InstallationDocumentation: React.FC<any> = () => {
  const [avatarDoc, setAvatarDoc] = useState('');

  useEffect(() => {
    fetch(readmePath)
      .then(response => response.text())
      .then(setAvatarDoc);
  });
  return (
    <>
      <EditPage
        href="
        https://github.com/mohammedshamia/UI-components-team-b/blob/development/src/pages/documentation/Installation/doc.md"
      />
      <Markdown content={avatarDoc} />
    </>
  );
};
export default InstallationDocumentation;
