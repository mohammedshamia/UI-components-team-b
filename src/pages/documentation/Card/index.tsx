import { useEffect, useState } from 'react';
import { EditPage } from '../../../components/layoutComponent/Container';
import Markdown from '../../../components/layoutComponent/Markdown';
import TableProps from '../../../components/layoutComponent/TableProps';
import {
  CardSimple,
  CardImg,
  CardHeader,
  CardSize,
  CardColor,
} from './CardExamples';

import propsTableData from './props';

// @ts-ignore
// eslint-disable-next-line import/extensions
import readmePath from './doc.md';

const CardDocumentation: React.FC<any> = () => {
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
https://github.com/mohammedshamia/UI-components-team-b/blob/development/src/pages/documentation/Card/doc.md"
      />
      <Markdown
        content={avatarDoc}
        examples={{
          ex1: CardSimple,
          ex2: CardImg,
          ex3: CardHeader,
          ex4: CardSize,
          ex5: CardColor,
        }}
      />
      <TableProps data={propsTableData} />
    </>
  );
};

export default CardDocumentation;
