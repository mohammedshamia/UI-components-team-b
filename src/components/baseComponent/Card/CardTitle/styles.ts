import styled from 'styled-components';

interface IProps {
  color?: string;
  size?: string;
  align?: string;
}

const CardTitle = styled.h3<IProps>`
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: ${props =>
    props.size === 'small'
      ? '18px'
      : props.size === 'medium'
      ? '24px'
      : props.size === 'large'
      ? '32px'
      : '1.5rem'};
  line-height: 1.334;
  letter-spacing: 0em;
  margin-bottom: 0.35em;
  color: ${props => (props.color ? props.color : '#212529')};
  text-align: ${props => (props.align ? props.align : 'left')};
`;

export default CardTitle;
