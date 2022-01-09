import Markdown from '../../../components/layoutComponent/Markdown';
import {
  SimpleRatingExample,
  SizeRatingExample,
  CustomizationRating,
  AvatarWithVariant,
  AvatarGroupExample,
  AvatarWithBadge,
} from './RatingExamples';

import ratingDoc from './doc';

const RatingDocumentation: React.FC<any> = () => {
  return (
    <Markdown
      content={ratingDoc}
      examples={{
        ex1: SimpleRatingExample,
        ex2: SizeRatingExample,
        ex3: CustomizationRating,
        ex4: AvatarWithVariant,
        ex5: AvatarGroupExample,
        ex6: AvatarWithBadge,
      }}
    />
  );
};

export default RatingDocumentation;
