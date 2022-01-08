import React from 'react';
import { AvatarGroupComponent, AvatarComponent } from './style';
import { IAvatarGroupProps } from './interface';

const AvatarGroup: React.FC<IAvatarGroupProps> = ({
  children,
  max = 0,
  total = 0,
  ...props
}) => (
  <AvatarGroupComponent max={max} total={total} {...props}>
    {children}
    {total && total > max && (
      <AvatarComponent
        as="div"
        children={(total - max).toString()}
        border
        shadow={props?.shadow}
        style={{
          backgroundColor: '#f5f5f5',
        }}
      />
    )}
  </AvatarGroupComponent>
);

export default AvatarGroup;
// https://avatars.githubusercontent.com/u/44713857?v=4
