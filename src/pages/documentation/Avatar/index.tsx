import { EmbedCode, Typography } from '../../../components';
import Markdown from '../../../components/layoutComponent/Markdown';
import { NavbarLink } from '../../../components/layoutComponent/Navbar/style';
import TableProps from '../../../components/layoutComponent/TableProps';
import {
  AvatarExample,
  LetterAvatar,
  AvatarWithSizes,
  AvatarWithVariant,
  AvatarGroupExample,
  AvatarWithBadge,
} from './AvatarExamples';

import avatarDoc from './doc';
import propsTableData from './propsTableData';

const AvatarDocumentation: React.FC<any> = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <NavbarLink
          as="a"
          style={{ marginLeft: 'auto' }}
          href="https://github.com/mohammedshamia/UI-components-team-b/blob/development/src/pages/documentation/Avatar/doc.ts"
          target="_blank"
        >
          <i className="fas fa-edit" style={{ marginRight: '2px' }} />
          Edit page
        </NavbarLink>
      </div>
      <Markdown
        content={avatarDoc}
        examples={{
          ex1: AvatarExample,
          ex2: LetterAvatar,
          ex3: AvatarWithSizes,
          ex4: AvatarWithVariant,
          ex5: AvatarGroupExample,
          ex6: AvatarWithBadge,
        }}
      />
      <EmbedCode
        title="Edit your component before use"
        height="40rem"
        src="https://codesandbox.io/embed/jolly-ardinghelli-70mn6?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fpages%2Fdocumentation%2FAvatar%2FAvatarExamples.tsx&theme=dark"
      />
      <TableProps data={propsTableData} />
    </>
  );
};

export default AvatarDocumentation;
