import styled, { css } from 'styled-components';
import { IAvatarProps, IAvatarGroupProps } from './interface';

const getSize = (size: IAvatarProps['size']) => {
  switch (size) {
    case 'small':
      return '32px';
    case 'medium':
      return '48px';
    case 'large':
      return '64px';
    case 'xlarge':
      return '96px';
    default:
      return '48px';
  }
};

const createCSS = (total: number) => {
  let styles = '';
  for (let i = 0; i < total; i += 1) {
    styles += `
      &:nth-child(${i}) {
        z-index: ${20 - i};
        overflow: hidden;
        right: i++;

      }
     `;
  }

  return css`
    ${styles}
  `;
};

export const AvatarComponent = styled.img<IAvatarProps>`
  width: ${props => getSize(props.size)};
  height: ${props => getSize(props.size)};
  border-radius: ${props => (props.variant === 'square' ? '10%' : '50%')};
  border: ${props => (props.border ? '2px solid #00000' : 'none')};
  padding:1
  border-width: ${props => (props.border ? '1px' : '0')};
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 2px;
  background-color: #ffffff;
  font-size: ${props => (props.size === 'xlarge' ? '30px' : '20px')};
  box-shadow: ${props =>
    props.shadow ? '0px 1px 3px rgba(0, 0, 0, 0.25)' : 'none'};
`;

export const AvatarGroupComponent = styled.div<IAvatarGroupProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & > ${AvatarComponent} {
    ${(props: IAvatarGroupProps) => createCSS(props.total || 10)}
    margin: 0 0 0 -5px;
  }
`;

export const BadgeComponent = styled.div<IAvatarProps>`
  position: absolute;
  margin-top: 2%;
  margin-left: 2%;
  background-color: ${props => props.badgeColor || '#2AA22A'};
  width: 10px;
  height: 10px;
  padding: 4px;
  border: 1px solid #ffffff;
  border-radius: 50%;
`;
