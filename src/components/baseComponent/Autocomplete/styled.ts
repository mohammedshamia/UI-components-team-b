import styled from 'styled-components';

interface Iprops {
  width: string;
}
export const Wrapper = styled.div<Iprops>`
  width: ${props => props.width};
  & div {
    position: relative;
  }
`;

export const StyledAutoComplete = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #e1e1e1;
  transition: all 0.4s;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #e1e1e1;
  }
`;

interface IChoicesWrapperProps {
  openChoices: boolean;
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
  & button {
    background: none;
    border: none;
    transition: all 0.1s;
    padding: 10px;
    margin-bottom: 1px;
    width: 100%;
    &:hover {
      background-color: #e1e1e1;
    }
  }
`;
export const Icon = styled.span`
  position: absolute;
  right: 10px;
  top: calc(50% - 10px);
  justify-content: center;
  display: flex;
  border-radius: 30%;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
