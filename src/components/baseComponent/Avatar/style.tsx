import styled from 'styled-components';
import IImageProps from './interface';

const getSize = (size: IImageProps['size']) => {
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

const Avatar = styled.img<IImageProps>`
  width: ${props => getSize(props.size)};
  height: ${props => getSize(props.size)};
  border-radius: 50%;
  border: ${props => (props.border ? '1px solid #ccc' : 'none')};
  border-width: ${props => (props.border ? '1px' : '0')};
  box-shadow: ${props =>
    props.shadow ? '0px 2px 5px rgba(0, 0, 0, 0.25)' : 'none'};
`;

export default Avatar;
