import styled from 'styled-components';

interface IProps {
  color?: string;
  size?: string;
  align?: string;
}

const CardDesc = styled.p<IProps>`
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: ${props =>
    props.size === 'small'
      ? '14px'
      : props.size === 'medium'
      ? '16px'
      : props.size === 'large'
      ? '18px'
      : '0.875rem'};
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: ${props => (props.color ? props.color : 'rgba(0, 0, 0, 0.6)')};
  margin-bottom: 1em;
  text-align: ${props => (props.align ? props.align : 'left')};
`;

export default CardDesc;
