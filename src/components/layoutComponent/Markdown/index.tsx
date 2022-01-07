import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Typography } from '../../../components';
import { Container } from '..';

const ConvertTypography = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
].reduce((acc: objectType, tag) => {
  acc[tag] = (props: any) => <Typography variant={tag} {...props} />;
  return acc;
}, {});

const Docs: React.FC<MarkdownProps> = ({ content, examples }) => {
  return (
    <ReactMarkdown
      children={content}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={vs2015}
              language={match[1]}
              PreTag={Container}
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        ...ConvertTypography,
        ...examples,
      }}
    />
  );
};

export default Docs;
