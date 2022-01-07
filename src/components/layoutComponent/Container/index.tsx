import CodeContainer from 'react-code-container';
import { ContainerStyle, InfoContainerStyle, EmbedCodeStyle } from './style';
import { IContainerProps, IEmbedCodeProps } from './interface';

export const Container: React.FC<IContainerProps> = props => {
  return <ContainerStyle {...props} />;
};

export const InfoContainer: React.FC<IContainerProps> = props => (
  <InfoContainerStyle {...props} />
);

// to use embed code u can pass src below
// https://stackblitz.com/edit/react-dcs7kh?embed=1&file=index.js&hideExplorer=1&hideNavigation=1&theme=light&view=editor
export const EmbedCode: React.FC<IEmbedCodeProps> = props => (
  <EmbedCodeStyle {...props} />
);

// non editable code snippet
export const ScriptCodeContainer: React.FC<any> = ({
  code,
  ...props
}: {
  code: string;
}) => <CodeContainer {...props} code={code} language="javascript" />;
