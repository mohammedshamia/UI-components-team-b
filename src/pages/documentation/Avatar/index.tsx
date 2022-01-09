import Markdown from '../../../components/layoutComponent/Markdown';
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
      <TableProps id="api" data={propsTableData} />
    </>
  );
};

export default AvatarDocumentation;
