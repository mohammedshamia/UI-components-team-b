import Markdown from '../../../components/layoutComponent/Markdown';
import {
  TypographyExample,
  TypographyExample2,
  TypographyExample3,
} from './TypographyExamples';
import TypographyDocs from './doc';

const TypographyDocumentation = () => {
  return (
    <Markdown
      content={TypographyDocs}
      examples={{
        ex1: TypographyExample,
        ex2: TypographyExample2,
        ex3: TypographyExample3,
      }}
    />
  );
};

export default TypographyDocumentation;
