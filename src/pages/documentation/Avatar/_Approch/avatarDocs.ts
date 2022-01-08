import { AvatarExample, LetterAvatar } from './AvatarExamples';

const paragraphStyle: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '24px',
  margin: '1rem 0 1rem 0',
};

const avatarDocs: DocsProps[] = [
  {
    type: 'Typography',
    variant: 'h3',
    children: 'Avatar',
    bold: true,
    id: '#avatar-title',
  },
  {
    type: 'Typography',
    variant: 'p',
    children:
      'Avatars are used to represent people or objects in a graphical way.',
    style: paragraphStyle,
  },
  {
    type: 'Typography',
    variant: 'h3',
    children: 'Image avatars',
    bold: true,
  },
  {
    type: 'Typography',
    variant: 'p',
    style: paragraphStyle,
    children:
      'Image avatars can be created by passing standard img props src or srcSet to the component.',
  },
  {
    type: 'InfoContainer',
    children: Array.from(Array(4).keys()).map(() => AvatarExample()),
  },
  {
    type: 'Typography',
    variant: 'h3',
    children: 'Later avatars',
    style: {
      marginTop: '2rem',
    },
    bold: true,
  },
  {
    type: 'Typography',
    variant: 'p',
    style: paragraphStyle,
    children:
      'Image avatars can be created by passing standard img props src or srcSet to the component.',
  },
  {
    type: 'InfoContainer',
    children: Array.from(Array(3).keys()).map(() => LetterAvatar()),
  },
  {
    type: 'Typography',
    children: 'Sizes',
    variant: 'h3',
    bold: true,
  },
];

export default avatarDocs;
