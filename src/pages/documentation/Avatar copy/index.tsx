import Markdown from '../../../components/layoutComponent/Markdown';
import {
  SimpleRatingExample,
  SizeRatingExample,
  CustomizationRating,
} from './RatingExamples';

import ratingDoc from './doc';
import TableProps from '../../../components/layoutComponent/TableProps';

const RatingDocumentation: React.FC<any> = () => {
  return (
    <>
      <Markdown
        content={ratingDoc}
        examples={{
          ex1: SimpleRatingExample,
          ex2: SizeRatingExample,
          ex3: CustomizationRating,
        }}
      />
      {/* <TableProps id="api" data={propsTableData} /> */}
    </>
  );
};

export default RatingDocumentation;
