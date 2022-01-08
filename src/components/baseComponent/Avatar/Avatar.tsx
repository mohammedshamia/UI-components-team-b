import React from 'react';
import { AvatarComponent, BadgeComponent } from './style';
import { IAvatarProps } from './interface';

const Avatar: React.FC<IAvatarProps> = ({
  name,
  backgroundColor,
  badge,
  ...props
}) => (
  <AvatarComponent as="div">
    <AvatarComponent
      {...(name
        ? {
            src: `https://ui-avatars.com/api/?name=${name}&background=${
              backgroundColor || '0D8ABC'
            }&color=fff&size=128`,
          }
        : { src: props.src })}
      {...props}
    />
    {badge && <BadgeComponent {...props} />}
  </AvatarComponent>
);

export default Avatar;
