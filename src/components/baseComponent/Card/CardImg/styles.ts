import styled from 'styled-components';

interface IProps {
  width?: string;
  height?: string;
}

const Img = styled.img<IProps>`
  width: 100%;
  object-fit: cover;
  width: ${props => (props.width ? props.height : '100%')};
  height: ${props => (props.height ? props.height : 'auto')};
  margin: auto;
`;

export default Img;
