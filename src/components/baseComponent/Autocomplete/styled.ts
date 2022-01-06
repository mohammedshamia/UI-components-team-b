import styled from 'styled-components';
import { IProps } from './interface';

interface Iprops {
  width: string;
  disabled?: boolean;
}
interface fontSize {
  fontSize: string;
  error?: string;
}
export const Wrapper = styled('div')<Iprops>`
  width: ${props => props.width};
  & div {
    position: relative;
  }
`;

export const StyledAutoComplete = styled.input<fontSize>`
  padding: 10px;
  font-size: ${props => props.fontSize};
  ${props =>
    props.error
      ? 'border:1px solid #f75555;background-color: #f7d6d6; '
      : ' border: 1px solid #e1e1e1'};

  transition: all 0.4s;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px #e1e1e1;
    border: 1px solid #e1e1e1;
    background-color: #ffffff;
  }
`;

interface IChoicesWrapperProps {
  openChoices: boolean;
  isActive?: boolean;
  alignItem: string;
}

export const ChoicesWrapper = styled.div<IChoicesWrapperProps>`
  display: ${props => (props.openChoices ? 'flex' : 'none')};
  align-items: ${props =>
    props.alignItem === 'center'
      ? 'center'
      : props.alignItem === 'right'
      ? 'flex-end'
      : 'flex-start'};
  flex-direction: column;
  width: calc(100% + 20px);
  border: 1px solid #e1e1e1;
  max-height: 300px;
  overflow-y: scroll;
`;
interface IButtonProps {
  isActive?: boolean;
  fontSize: string;
}

export const Button = styled.button<IButtonProps>`
  font-size: ${props => props.fontSize};
  background: none;
  border: none;
  transition: all 0.1s;
  padding: 10px;
  margin-bottom: 1px;
  width: 100%;
  ${props => props.isActive && 'background-color:#c8c8c8'};
  &:hover {
    background-color: #e1e1e1;
  }
`;
export const Icon = styled.span`
  position: absolute;
  right: 10px;
  top: calc(50% - 10px);
  justify-content: center;
  display: flex;
  border-radius: 30%;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
export const ArrowIcon = styled.span`
  position: absolute;
  right: -3%;
  top: calc(50% - 10px);
  transition: all 0.5s;
  justify-content: center;
  display: flex;
  cursor: pointer;
`;
interface error {
  fontSize?: string;
  error?: string;
}
export const TextError = styled.span<error>`
  color: #f75555;
`;
