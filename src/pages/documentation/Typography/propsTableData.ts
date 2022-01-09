export default [
  {
    id: '1',
    Name: 'variant',
    Type: 'h1 | h2 |h3 | h4 | h5 | h6 | p | span',

    Default: 'p',
    Description: 'Applies the theme typography styles.',
  },
  {
    id: '2',
    Name: 'fontSize',
    Type: 'string',
    Default: 'primary',
    Description: ' size of the text ',
  },
  {
    id: '3',
    Name: 'color',
    Type: 'string',
    Default: 'primary',
    Description: 'choose any color',
  },
  {
    id: '4',
    Name: 'children',
    Type: 'React Node',
    Default: 'secondary',
    Description: 'The content of the component.',
  },

  {
    id: '5',
    Name: 'bold',
    Type: 'boolean',
    Default: 'false',
    Description: ' bold is the font weight of typography',
  },
];
