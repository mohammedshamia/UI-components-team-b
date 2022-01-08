import styled from 'styled-components';
import { IContainerProps, IEmbedCodeProps } from './interface';

export const ContainerStyle = styled.div<IContainerProps>`
  background-color: ${props => props.theme.background.default};
  padding: 6%;
  border: none;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  outline: none;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  .fas {
    margin-left: 15px;
  }
  @media (max-width: 526px) {
    width: 100%;
  }
`;

export const InfoContainerStyle = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #e6e6e6;
  padding: 20px;
  border-radius: 12px;
  min-height: 7.2rem;
  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    .info-container-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .info-container-text {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
`;

export const EmbedCodeStyle = styled.iframe<IEmbedCodeProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '20rem'};
  border-radius: 12px;
  align-items: center;
  margin-top: 20px;
`;
