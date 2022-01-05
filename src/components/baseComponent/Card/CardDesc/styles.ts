import styled from 'styled-components';

interface IProps {
  color?: string;
  size?: string;
  align?: string;
}

const CardDesc = styled.p<IProps>`
  color: ${props => (props.color ? props.color : 'rgba(0, 0, 0, 0.75)')};
  font-size: ${props =>
    props.size === 'small'
      ? '14px'
      : props.size === 'medium'
      ? '26px'
      : props.size === 'large'
      ? '18px'
      : '16px'};
  text-align: ${props => (props.align ? props.align : 'left')};
  font-weight: 400;
  letter-spacing: 0.01071em;
  line-height: 1.25;
  margin-bottom: 1rem;
`;

export default CardDesc;
