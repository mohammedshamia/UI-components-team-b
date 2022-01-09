import Markdown from '../../../components/layoutComponent/Markdown';
// import {
//   ComboboxExample,
//   Playground,
//   CountrySelect,
//   FreeSolo,
//   IconExample,
//   ValidationExample,
// } from './AutoComplete';

import installationDoc from './doc';

const InstallationDocumentation: React.FC<any> = () => {
  return (
    <Markdown
      content={installationDoc}
      // examples={{
      //   ex1: ComboboxExample,
      //   ex2: Playground,
      //   ex3: CountrySelect,
      //   ex4: FreeSolo,
      //   ex5: IconExample,
      //   ex6: ValidationExample,
      // }}
    />
  );
};

export default InstallationDocumentation;
