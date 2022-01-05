import styled from 'styled-components';

interface IProps {
  color?: string;
  size?: string;
  align?: string;
}

const CardTitle = styled.h3<IProps>`
  color: ${props => (props.color ? props.color : '#212529')};
  font-size: ${props =>
    props.size === 'small'
      ? '18px'
      : props.size === 'medium'
      ? '24px'
      : props.size === 'large'
      ? '32px'
      : '24px'};
  margin-bottom: 0.5rem;
  text-align: ${props => (props.align ? props.align : 'left')};
`;

export default CardTitle;
