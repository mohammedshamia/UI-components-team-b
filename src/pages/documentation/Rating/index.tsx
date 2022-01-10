import { useEffect, useState } from 'react';
import Markdown from '../../../components/layoutComponent/Markdown';
import {
  SimpleRatingExample,
  SizeRatingExample,
  CustomizationRating,
} from './RatingExamples';

// @ts-ignore
// eslint-disable-next-line import/extensions
import readmePath from './doc.md';
import { EditPage } from '../../../components/layoutComponent/Container';
import TableProps from '../../../components/layoutComponent/TableProps';
import propsTableData from './propsTableData';

const RatingDocumentation: React.FC<any> = () => {
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
https://github.com/mohammedshamia/UI-components-team-b/blob/development/src/pages/documentation/Rating/doc.md"
      />
      <Markdown
        content={avatarDoc}
        examples={{
          ex1: SimpleRatingExample,
          ex2: SizeRatingExample,
          ex3: CustomizationRating,
        }}
      />
      <div id="api_rating">
        <TableProps data={propsTableData} />
      </div>
    </>
  );
};

export default RatingDocumentation;
