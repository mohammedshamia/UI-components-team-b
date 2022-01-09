import Markdown from '../../../components/layoutComponent/Markdown';
import {
  CardSimple,
  CardImg,
  CardHeader,
  CardSize,
  CardColor,
} from './CardExamples';

import cardDoc from './doc';

const CardDocumentation: React.FC<any> = () => {
  return (
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
  );
};

export default CardDocumentation;
