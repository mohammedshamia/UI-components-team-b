import styled from 'styled-components';

interface Iprops {
  width: string;
  disabled?: boolean;
  error?: string;
  borderRadius?: string;
  margin: string;
}
interface fontSize {
  fontSize: string;
}
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled('div')<Iprops>`
  position: relative;
  margin: ${props => props.margin};
  width: ${props => props.width};
  border: 1px solid
    ${props =>
      props.disabled ? props.theme.text.disable : props.theme.primary.dark};
  background-color: ${props =>
    props.disabled
      ? props.theme.background.paper
      : props.theme.background.default};
  border-radius: ${props => props.borderRadius || '0px'};
  ${props =>
    props.error
      ? 'border:1px solid #f75555;background-color: #f7d6d6; '
      : 'border: 1px solid #e1e1e1'};

  ${props =>
    props.disabled ? ' pointer-events: none' : ' pointer-events: auto'};
  &:hover {
    outline: none;
    box-shadow: 0px 0px 2px ${props => props.theme.text.disable};
    background-color: ${props => props.theme.background.default};
  }
`;
export const BoxInput = styled.div`
  position: relative;
  display: flex;
`;
export const StyledAutoComplete = styled.input<fontSize>`
  color: ${props =>
    props.disabled ? props.theme.text.disable : props.theme.text.secondary};
  padding: 10px;
  font-size: ${props => props.fontSize};
  transition: all 0.4s;
  width: 100%;
  border: none;
  outline: none;
  background: none;
`;

interface IChoicesWrapperProps {
  openChoices: boolean;
  isActive?: boolean;
  alignItem: string;
  maxHeight: string;
}

export const ChoicesWrapper = styled.div<IChoicesWrapperProps>`
  background: ${props => props.theme.background.paper};

  position: absolute;
  width: 100%;
  display: ${props => (!props.openChoices ? 'none' : 'flex')};
  align-items: ${props =>
    props.alignItem === 'center'
      ? 'center'
      : props.alignItem === 'right'
      ? 'flex-end'
      : 'flex-start'};
  flex-direction: column;
  z-index: 2;
  border: 1px solid #e1e1e1;
  max-height: 300px;
  overflow-y: ${props => (props.maxHeight >= '300px' ? 'auto' : 'auto')};
`;
interface IButtonProps {
  isActive?: boolean;
  fontSize: string;
  textAlign?: string;
}

export const Button = styled.button<IButtonProps>`
  font-size: ${props => props.fontSize};
  background: none;
  color: ${props => props.theme.text.primary};
  border: none;
  transition: all 0.1s;
  padding: 10px;
  margin-bottom: 1px;
  width: 100%;
  text-align: ${props => props.textAlign || 'center'}
    ${props => props.isActive && 'background-color:#c8c8c8'};
  &:hover {
    background-color: ${props => props.theme.background.hover};
  }
`;
export const Icon = styled.span`
  position: absolute;
  right: 35px;
  top: calc(50% - 10px);
  justify-content: center;
  display: flex;
  border-radius: 30%;
  transition: all 0.5s;
  cursor: pointer;
`;
export const ArrowIcon = styled.span`
  position: absolute;
  right: 3%;
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
export const StartIcon = styled.span`
  align-items: center;
  justify-content: center;
  display: flex;
  color: ${props => props.theme.text.disable};
  font-size: 0.7rem;
  padding: 7px 10px 7px 10px;
  margin-right: 2px;
  ${Wrapper}:hover & {
    color: ${props => props.theme.text.disable};
  }
`;
