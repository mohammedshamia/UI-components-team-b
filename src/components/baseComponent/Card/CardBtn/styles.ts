import styled from 'styled-components';

interface IProps {
  bgColor?: string;
  color?: string;
  size?: string;
}

const CardBtn = styled.button<IProps>`
  border: 1px solid ${props => (props.bgColor ? props.bgColor : 'transparent')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  font-size: ${props =>
    props.size === 'small'
      ? '0.5em'
      : props.size === 'medium'
      ? '0.8125rem;'
      : props.size === 'large'
      ? '1.25em'
      : '0.8125rem;'};
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: ${props => (props.color ? props.color : '#1976d2')};
  margin-right: 0.5rem;
  &:hover {
    background-color: ${props =>
      props.bgColor ? props.bgColor : 'rgba(25, 118, 210, 0.04)'};
    opacity: ${props => (props.bgColor ? '0.75' : '1')};
    text-decoration: none;
  }
`;

export default CardBtn;
