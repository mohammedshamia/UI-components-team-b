import Markdown from '../../../components/layoutComponent/Markdown';
import { TypographyExample } from './TypographyExamples';
import TypographyDocs from './doc';

const TypographyDocumentation = () => {
  return (
    <Markdown content={TypographyDocs} examples={{ ex1: TypographyExample }} />
  );
};

export default TypographyDocumentation;
