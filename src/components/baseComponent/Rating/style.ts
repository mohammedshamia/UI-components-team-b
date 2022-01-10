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
    /* transform: rotate(0deg); */
    /* background: 'red'; */
  }
  100% {
    /* transform: rotate(180deg); */

  }
  
`;

interface IWrapperParentStart {
  readonly: boolean;
  disabled: boolean;
  fill?: string;
  width?: number;
}

export const WrapperParentStart = styled('div')<IWrapperParentStart>`
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  ${props =>
    props.disabled &&
    css`
      cursor: default;
      opacity: 0.4;
      &:hover {
        animation: none !important;
        transition: none !important;
      }
    `};
  ${props =>
    props.readonly &&
    css`
      cursor: default;
      &:hover {
        /* padding: 0px 4px; */
        animation: none !important;
        transition: none !important;
      }
    `};

  svg {
    /* fill: ${props => props.fill} !important;
    color: red;
    width: ${props => props.width} !important; */
  }
  &:hover {
    /* padding: 0px 4px; */
    transition-property: all;
    transition-duration: 100ms;
    transition-delay: 100ms;
    /* animation: ${AnimationSpan} 1s; */
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
