import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Avatar from './Approch1';
// @ts-ignore

import avatarDoc from './doc';
import { Typography } from '../../../components';

const Docs: React.FC<any> = () => {
  return (
    <ReactMarkdown
      children={avatarDoc}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={vs2015}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        h2: (props: any) => <Typography variant="h2" {...props} />,
        em: () => <Avatar />,
      }}
    />
  );
};

export default Docs;
