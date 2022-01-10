import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  vs2015,
  atelierEstuaryLight,
  // @ts-ignore
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import remarkGfm from 'remark-gfm';

import React from 'react';
import { useTheme } from 'styled-components';
import { Typography } from '../../../components';

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

const Markdown: React.FC<MarkdownProps> = ({ content, examples }) => {
  const { background } = useTheme();
  return (
    <div
      style={{
        marginTop: '2rem',
      }}
    >
      <ReactMarkdown
        children={content}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <div
                style={{
                  border: `1px solid #E9E7E7`,
                  borderBottomRightRadius: '0.5rem',
                  borderBottomLeftRadius: '0.5rem',
                  borderTop: 'none',
                  marginTop: '-.5rem',
                  overflow: 'auto',
                }}
              >
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={
                    background?.default === '#fff'
                      ? atelierEstuaryLight
                      : vs2015
                  }
                  language={match[1]}
                  PreTag="dev"
                  {...props}
                />
              </div>
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
    </div>
  );
};

export default Markdown;
