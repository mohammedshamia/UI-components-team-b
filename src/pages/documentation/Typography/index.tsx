import Markdown from '../../../components/layoutComponent/Markdown';
import {
  TypographyExample,
  TypographyExample2,
  TypographyExample3,
} from './TypographyExamples';
import TypographyDocs from './doc';
import TableProps from '../../../components/layoutComponent/TableProps';
import propsTableData from './propsTableData';
import { EditPage } from '../../../components/layoutComponent/Container';

const TypographyDocumentation = () => {
  return (
    <>
      <EditPage
        href="
      https://github.com/mohammedshamia/UI-components-team-b/blob/development/src/pages/documentation/Typography/doc.ts"
      />
      <Markdown
        content={TypographyDocs}
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
