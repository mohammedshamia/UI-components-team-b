import React, { useState } from 'react';
import { Avatar, InfoContainer, AvatarGroup } from '../../../components';
import { SelectInput } from '../../../components/baseComponent/Autocomplete';

export const ComboboxExample = () => {
  const [state, setState] = useState<string>('');
  const handeleChange = (newvalue: string) => {
    setState(newvalue);
  };
  return (
    <InfoContainer>
      <SelectInput
        width="300px"
        onChange={handeleChange}
        placeholder="select"
        name="combo box"
        option={[]}
        value={state}
      />
    </InfoContainer>
  );
};

export const LetterAvatar = () => (
  <InfoContainer>
    <Avatar name="Ahmad Salah" />
    <Avatar name="MA" backgroundColor="AC2D2D" />
    <Avatar name="MN" />
  </InfoContainer>
);

export const AvatarWithSizes = () => (
  <InfoContainer>
    <Avatar src="https://mui.com/static/images/avatar/2.jpg" size="small" />
    <Avatar src="https://mui.com/static/images/avatar/2.jpg" size="medium" />
    <Avatar src="https://mui.com/static/images/avatar/2.jpg" size="large" />
    <Avatar src="https://mui.com/static/images/avatar/2.jpg" size="xlarge" />
  </InfoContainer>
);

export const AvatarWithVariant = () => (
  <InfoContainer>
    <Avatar src="https://mui.com/static/images/avatar/2.jpg" variant="square" />
    <Avatar src="https://mui.com/static/images/avatar/2.jpg" variant="square" />
  </InfoContainer>
);

export const AvatarGroupExample = () => (
  <InfoContainer>
    <AvatarGroup total={20} max={3}>
      <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
      <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
      <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
    </AvatarGroup>
  </InfoContainer>
);

export const AvatarWithBadge = () => (
  <InfoContainer>
    <Avatar src="https://mui.com/static/images/avatar/2.jpg" badge />
    <Avatar
      src="https://mui.com/static/images/avatar/2.jpg"
      badge
      badgeColor="#f44336"
    />
    <Avatar
      src="https://mui.com/static/images/avatar/2.jpg"
      badge
      badgeColor="orange"
    />
  </InfoContainer>
);
