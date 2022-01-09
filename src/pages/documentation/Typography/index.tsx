import Markdown from '../../../components/layoutComponent/Markdown';
import {
  TypographyExample,
  TypographyExample2,
  TypographyExample3,
} from './TypographyExamples';
import TypographyDocs from './doc';
import TableProps from '../../../components/layoutComponent/TableProps';
import propsTableData from './propsTableData';

const TypographyDocumentation = () => {
  return (
    <>
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
