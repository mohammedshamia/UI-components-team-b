import React from 'react';
import { AvatarComponent } from './style';
import { IAvatarProps } from './interface';

const Avatar: React.FC<IAvatarProps> = props => <AvatarComponent {...props} />;

export default Avatar;
