import { ContainerStyle, InfoContainerStyle } from './style';
import { IContainerProps } from './interface';

export const Container: React.FC<IContainerProps> = props => {
  return <ContainerStyle {...props} />;
};

export const InfoContainer: React.FC<IContainerProps> = props => (
  <InfoContainerStyle {...props} />
);

export const EmbedCode: React.FC<IContainerProps> = props => (
  <InfoContainerStyle {...props} />
);
