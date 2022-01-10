import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  height: 100vh;
  background: ${props => props.theme.background.default};
  overflow: hidden;
  @media (max-width: 888px) {
    height: auto;
  }
`;

export const Content = styled.div`
  padding: 9% 0 0 9.2%;
  align-items: center;
`;

export const ImageContainer = styled.div`
  border: 1px solid #e6e6e6;
  padding: 20px;
  margin-top: 64px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  overflow: scroll;
  height: 100%;
  border-bottom-left-radius: 1rem;
  & div {
    border: none;
    padding: -1px;
    width: 20rem;
    height: auto;
  }
`;

export const ContainerImg = styled.img`
  @media (max-width: 888px) {
    display: none;
  }
  height: 130%;
  width: 100%;
`;
export const ContainerButton = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 526px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const contentStyle = {
  'font-size': '1rem',
  'line-height': 1.6,
  'letter-spacing': 0,
  'font-family': 'IBM Plex Sans',
  'font-weight': 400,

  margin: '1em 0 2em 0',
  'max-width': '500px',
};
