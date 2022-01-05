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
  .fas {
    margin-left: 15px;
  }
`;
