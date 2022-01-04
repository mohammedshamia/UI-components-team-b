import styled from 'styled-components';

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

const WrapperParent = styled('div')<IDivWrapper>`
  display: ${props => props.display};
  align-items: ${props => props.item};
  flex-direction: ${props => props.FD};
  justify-content: ${props => props.FD}; ;
`;

WrapperParent.defaultProps = {
  display: 'flex',
};

export default WrapperParent;
