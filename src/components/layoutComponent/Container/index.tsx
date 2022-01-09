import CodeContainer from 'react-code-container';
import { ContainerStyle, InfoContainerStyle, EmbedCodeStyle } from './style';
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
export const EmbedCode: React.FC<IEmbedCodeProps> = props => (
  <EmbedCodeStyle {...props} />
);

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
      marginTop: '2rem',
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
