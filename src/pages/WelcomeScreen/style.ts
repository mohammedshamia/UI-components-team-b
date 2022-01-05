import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  /* background-color: pink;
  width: 100%; */
  @media (max-width: 888px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Content = styled.div`
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  flex-wrap: wrap;
  margin: 30px 0px;
  /* align-items: center; */
  /* justify-content: center; */
`;
export const ContainerImg = styled.img`
  width: 100%;
  @media (max-width: 888px) {
    /* flex-direction: column; */
    display: none;
  }
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
