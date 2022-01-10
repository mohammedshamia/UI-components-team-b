import { useEffect, useState } from 'react';
import Markdown from '../../../components/layoutComponent/Markdown';
import {
  TypographyExample,
  TypographyExample2,
  TypographyExample3,
} from './TypographyExamples';
// @ts-ignore
// eslint-disable-next-line import/extensions
import readmePath from './doc.md';
import TableProps from '../../../components/layoutComponent/TableProps';
import propsTableData from './propsTableData';
import { EditPage } from '../../../components/layoutComponent/Container';

const TypographyDocumentation = () => {
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
      https://github.com/mohammedshamia/UI-components-team-b/blob/development/src/pages/documentation/Typography/doc.md"
      />
      <Markdown
        content={avatarDoc}
        examples={{
          ex1: TypographyExample,
          ex2: TypographyExample2,
          ex3: TypographyExample3,
        }}
      />
      <TableProps data={propsTableData} />
    </>
  );
};

export default TypographyDocumentation;
