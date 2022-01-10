import Markdown from '../../../components/layoutComponent/Markdown';
import {
  SimpleRatingExample,
  SizeRatingExample,
  CustomizationRating,
} from './RatingExamples';
import ratingDoc from './doc';
import { EditPage } from '../../../components/layoutComponent/Container';
import TableProps from '../../../components/layoutComponent/TableProps';
import propsTableData from './propsTableData';

const RatingDocumentation: React.FC<any> = () => {
  return (
    <>
      <EditPage
        href="
https://github.com/mohammedshamia/UI-components-team-b/blob/development/src/pages/documentation/Rating/doc.ts"
      />
      <Markdown
        content={ratingDoc}
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
