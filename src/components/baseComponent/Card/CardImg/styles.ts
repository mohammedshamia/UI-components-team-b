import styled from 'styled-components';

interface IProps {
  width?: string;
  height?: string;
}

const Img = styled.img<IProps>`
  width: 100%;
  object-fit: cover;
  max-height: 200px;
`;

export default Img;
