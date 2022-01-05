import styled from 'styled-components';

interface IProps {
  bgColor?: string;
  color?: string;
  size?: string;
}

const CardBtn = styled.button<IProps>`
  display: inline-block;
  font-size: ${props =>
    props.size === 'small'
      ? '0.5em'
      : props.size === 'medium'
      ? '1em'
      : props.size === 'large'
      ? '1.25em'
      : '1em'};
  font-weight: 400;
  line-height: 1.5;
  color: ${props => (props.color ? props.color : '#212529')};
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  border: 1px solid ${props => (props.bgColor ? props.bgColor : 'transparent')};
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  margin-right: 0.5em;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default CardBtn;
