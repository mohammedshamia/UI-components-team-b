import { useTheme } from 'styled-components';
import Popup from 'reactjs-popup';
import { EmbedCode } from '../../../components';
import { EditPage } from '../../../components/layoutComponent/Container';
import Markdown from '../../../components/layoutComponent/Markdown';
import TableProps from '../../../components/layoutComponent/TableProps';
import 'reactjs-popup/dist/index.css';
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
import { ButtonStyle } from '../../../components/layoutComponent/Container/style';

const AvatarDocumentation: React.FC<any> = () => {
  const { background } = useTheme();
  return (
    <>
      <EditPage href="https://github.com/mohammedshamia/UI-components-team-b/blob/development/src/pages/documentation/Avatar/doc.ts" />
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
      <Popup
        trigger={
          <ButtonStyle type="button">
            Edit your component before use
          </ButtonStyle>
        }
        modal
        contentStyle={{
          width: '80%',
        }}
      >
        <EmbedCode
          title="Edit your component before use"
          height="40rem"
          width="100%"
          src={`https://codesandbox.io/embed/jolly-ardinghelli-70mn6?fontsize=14&hidenavigation=1&theme=${
            background.default === '#fff' ? 'light' : 'dark'
          }`}
        />
      </Popup>
      <TableProps data={propsTableData} />
    </>
  );
};

export default AvatarDocumentation;
