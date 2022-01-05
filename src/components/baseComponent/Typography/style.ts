import styled from 'styled-components';

import { IPropTypography } from './interface';

const Wrapper = styled.div<IPropTypography>`
  font-size: ${props => props.fontSize || '16px'};
  color: ${props => props.color || 'black'};
  font-weight: ${props => (props?.bold ? 800 : 500)};
  /* font-family: ${props => (props?.Robot ? 'Roboto' : null)}  */
  .ui {
    background: linear-gradient(to right, #007fff, #0059b2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export default Wrapper;
