import styled from 'styled-components';
import { ButtonProps } from './interface';

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.backgroundColor || '#007fff'};
  padding: 16px 20px;
  border: none;
  border-radius: 10px;
  color: ${props => props.color || 'white'};
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
    /* background-color: '#0059b2'; */
    background-color: ${props => (props?.hover ? '#0059b2' : null)};
    border: ${props => (props?.border ? ' 1px solid #007fff' : null)};
  }
  @media (max-width: 526px) {
    width: 100%;
  }
`;
