import { useState } from 'react';
import { AiFillApple } from 'react-icons/ai';
import { InfoContainer } from '../../../components';
import Rating from '../../../components/baseComponent/Rating';
import WrapperParent from '../../../components/baseComponent/Rating/style';

export const SimpleRatingExample = () => {
  const [value] = useState<number>(2);
  return (
    <InfoContainer flexDirection="column">
      <WrapperParent display="flex" JC="space-between" item="center">
        <h3> Controlled</h3>
        <Rating value={value} isRow />
      </WrapperParent>
      <br />
      <WrapperParent display="flex" JC="space-between" item="center">
        <h3> Readonly</h3>
        <Rating value={value} readonly />
      </WrapperParent>
      <br />
      <WrapperParent display="flex" JC="space-between" item="center">
        <h3> Disabled</h3>
        <Rating value={value} disabled />
      </WrapperParent>
    </InfoContainer>
  );
};

export const SizeRatingExample = () => (
  <InfoContainer flexDirection="column">
    <WrapperParent display="flex" JC="space-between" item="center">
      <h3> small</h3>
      <Rating value={2} isRow size="small" />
    </WrapperParent>
    <br />
    <WrapperParent display="flex" JC="space-between" item="center">
      <h3> medium</h3>
      <Rating value={2} isRow size="medium" />
    </WrapperParent>
    <br />
    <WrapperParent display="flex" JC="space-between" item="center">
      <h3> large</h3>
      <Rating value={2} isRow size="large" />
    </WrapperParent>
    <br />
  </InfoContainer>
);

export const CustomizationRating = () => (
  <InfoContainer flexDirection="column">
    <WrapperParent display="flex" JC="space-between" item="center">
      <h3> count 10</h3>
      <Rating value={8} isRow count={10} />
    </WrapperParent>
    <br />
    <WrapperParent display="flex" JC="space-between" item="center">
      <h3>render item as the coloum</h3>
      <Rating value={2} isRow={false} size="medium" />
    </WrapperParent>
    <br />
    <WrapperParent display="flex" JC="space-between" item="center">
      <h3> large</h3>
      <Rating value={2} isRow size="large" icon={<AiFillApple />} />
    </WrapperParent>
    <br />
  </InfoContainer>
);
