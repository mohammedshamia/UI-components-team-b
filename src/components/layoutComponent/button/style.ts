import styled from 'styled-components';
import { ButtonProps } from './interface';

export const Button = styled.button<ButtonProps>`
  background: ${props =>
    props.backgroundColor ? props.theme.background.paper : 'rgb(0, 127, 255)'};
  padding: 16px 20px;
  box-shadow: ${props =>
    props.backgroundColor && `0px 0px 3px ${props.theme.text.secondary}`};
  border: none;
  border-radius: 10px;
  color: ${props => (props.color ? props.theme.text.secondary : 'white')};
  width: ${props => props.width || '50px'};
  height: ${props => props.height || '50px'};
  font-weight: ${props => (props?.bold ? 700 : 400)};
  font-size: ${props => props.fontSize || '15px'};
  outline: none;
  cursor: pointer;
  .fas {
    margin-left: 15px;
  }
  &:hover {
    background-color: ${props => (props?.hover ? '#0059b2' : null)};
    border: ${props => (props?.border ? ' 1px solid #007fff' : null)};
  }
  @media (max-width: 526px) {
    width: 100%;
  }
`;
