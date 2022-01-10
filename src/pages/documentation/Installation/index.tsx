import Markdown from '../../../components/layoutComponent/Markdown';

import installationDoc from './doc';

const InstallationDocumentation: React.FC<any> = () => (
  <Markdown content={installationDoc} />
);

export default InstallationDocumentation;
