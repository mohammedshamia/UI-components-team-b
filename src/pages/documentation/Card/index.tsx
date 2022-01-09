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

import cardDoc from './doc';
import propsTableData from './props';

const CardDocumentation: React.FC<any> = () => {
  return (
    <>
      <EditPage
        href="
https://github.com/mohammedshamia/UI-components-team-b/blob/development/src/pages/documentation/Card/doc.ts"
      />
      <Markdown
        content={cardDoc}
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
