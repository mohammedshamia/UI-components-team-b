export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  width?: string;
  height?: string;
  backgroundColor?: string;
  flexDirection?: string;
}

export interface IEmbedCodeProps {
  src: string;
  width?: string;
  height?: string;
  title?: string;
}

export interface IEditPageProps {
  href: string;
}
