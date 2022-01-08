import Markdown from '../../../components/layoutComponent/Markdown';
import {
  ComboboxExample,
  LetterAvatar,
  AvatarWithSizes,
  AvatarWithVariant,
  AvatarGroupExample,
  AvatarWithBadge,
} from './AutoComplete';

import avatarDoc from './doc';

const AutoComleteDocumentation: React.FC<any> = () => {
  return (
    <Markdown
      content={avatarDoc}
      examples={{
        ex1: ComboboxExample,
        ex2: LetterAvatar,
        ex3: AvatarWithSizes,
        ex4: AvatarWithVariant,
        ex5: AvatarGroupExample,
        ex6: AvatarWithBadge,
      }}
    />
  );
};

export default AutoComleteDocumentation;
