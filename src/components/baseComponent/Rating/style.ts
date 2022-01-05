import styled, { keyframes, css } from 'styled-components';

interface IDivWrapper {
  display?: 'flex' | 'grid' | 'block';
  FD?: 'row' | 'column';
  JC?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end';
  item?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'first'
    | 'start'
    | 'end';
}

export const AnimationSpan = keyframes`

  0% {
    transform: rotate(0deg) scale(1);
    background: 'red';
  }
  50% {
    transform: rotate(180deg) scale(0.5);

  }
  
  100% {
    transform: rotate(360deg) scale(1);
  
}
`;

interface IWrapperParentStart {
  readonly?: boolean;
}

export const WrapperParentStart = styled('div')<IWrapperParentStart>`
  cursor: pointer;
  /* background: red; */
  margin-left: 10px;
  opacity: 1;
  ${props =>
    props.readonly === true &&
    css`
      cursor: auto;
      opacity: 0.4;
    `};
  &:hover {
    padding: 0px 4px;
    transition-property: all;
    transition-duration: 100ms;
    transition-delay: 100ms;
    animation: ${AnimationSpan} 0.8s;
  }
`;

const WrapperParent = styled('div')<IDivWrapper>`
  display: ${props => props.display};
  align-items: ${props => props.item};
  flex-direction: ${props => props.FD};
  justify-content: ${props => props.FD}; ;
`;

WrapperParent.defaultProps = {
  display: 'flex',
  JC: 'space-between',
  FD: 'row',
};

export default WrapperParent;
