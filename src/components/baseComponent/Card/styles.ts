import styled from 'styled-components';

interface IProps {
  width?: string;
  height?: string;
}

const CardSection = styled.div<IProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${props => (props.width ? props.width : '25%')};
  height: ${props => (props.height ? props.height : 'auto')};
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  overflow: hidden;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default CardSection;
