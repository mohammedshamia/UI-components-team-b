import { EditPage } from '../../../components/layoutComponent/Container';
import Markdown from '../../../components/layoutComponent/Markdown';
import {
  ComboboxExample,
  Playground,
  CountrySelect,
  FreeSolo,
  IconExample,
  ValidationExample,
} from './AutoComplete';

import autoCompleteDoc from './doc';

const AutoComleteDocumentation: React.FC<any> = () => {
  return (
    <>
      <EditPage
        href="
https://github.com/mohammedshamia/UI-components-team-b/blob/development/src/pages/documentation/AutoComplete/doc.ts"
      />{' '}
      <Markdown
        content={autoCompleteDoc}
        examples={{
          ex1: ComboboxExample,
          ex2: Playground,
          ex3: CountrySelect,
          ex4: FreeSolo,
          ex5: IconExample,
          ex6: ValidationExample,
        }}
      />
    </>
  );
};

export default AutoComleteDocumentation;
