import styled from 'styled-components';

import { IPropTypography } from './interface';

const Wrapper = styled.div<IPropTypography>`
  font-size: ${props => props.fontSize || '16px'};
  color: ${props => props.color || 'black'};
  font-weight: ${props => (props?.bold ? 800 : 500)};
`;
export default Wrapper;
