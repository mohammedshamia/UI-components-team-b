import CodeContainer from 'react-code-container';
import { useState } from 'react';
import {
  ContainerStyle,
  InfoContainerStyle,
  EmbedCodeStyle,
  ButtonStyle,
} from './style';
import { IContainerProps, IEditPageProps, IEmbedCodeProps } from './interface';
import { NavbarLink } from '../Navbar/style';

export const Container: React.FC<IContainerProps> = props => {
  return <ContainerStyle {...props} />;
};

export const InfoContainer: React.FC<IContainerProps> = props => (
  <InfoContainerStyle {...props} />
);

// to use embed code u can pass src below
// https://stackblitz.com/edit/react-dcs7kh?embed=1&file=index.js&hideExplorer=1&hideNavigation=1&theme=light&view=editor
export const EmbedCode: React.FC<IEmbedCodeProps> = ({ title, ...props }) => {
  const [showCode, setShowCode] = useState(false);
  return (
    <>
      <ButtonStyle type="button" onClick={() => setShowCode(!showCode)}>
        {title}
      </ButtonStyle>
      {showCode && <EmbedCodeStyle {...props} />}
    </>
  );
};
// non editable code snippet
export const ScriptCodeContainer: React.FC<any> = ({
  code,
  ...props
}: {
  code: string;
}) => (
  <CodeContainer {...props} code={code} language="typescript" showLineNumber />
);

export const EditPage: React.FC<IEditPageProps> = ({ href }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'flex-end',
    }}
  >
    <NavbarLink
      as="a"
      style={{ marginLeft: 'auto' }}
      href={href}
      target="_blank"
    >
      <i className="fas fa-edit" style={{ marginRight: '2px' }} />
      Edit page
    </NavbarLink>
  </div>
);
