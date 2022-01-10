export default [
  {
    id: '1',
    Name: 'isRow',
    Type: 'boolean',

    Default: 'true',
    Description: 'to  show  item in row.',
  },
  {
    id: '2',
    Name: 'count',
    Type: 'number',
    Default: '5',
    Description: 'Maximum rating.',
  },
  {
    id: '3',
    Name: 'size',
    Type: 'small  | large | medium',
    Default: 'medium',
    Description: 'The size of the component',
  },
  {
    id: '4',
    Name: 'value',
    Type: 'number',
    Default: '0',
    Description: 'The rating value.',
  },

  {
    id: '5',
    Name: 'readOnly',
    Type: 'boolean',
    Default: 'false',
    Description: 'Removes all hover effects and pointer events.',
  },
  {
    id: '6',
    Name: 'icon',
    Type: 'ReactNode',
    Default: '<AiFillStar/>',
    Description: 'The icon to display.',
  },
  {
    id: '7',
    Name: 'disabled',
    Type: 'boolean',
    Default: 'false',
    Description: 'If true, the component is disabled.',
  },
  {
    id: '8',
    Name: 'color',
    Type: 'Object',
    Default: 'fill:red ,unfill:#DCDCDC',
    Description: 'If true, the component is disabled.',
  },
  {
    id: '9',
    Name: 'emptyLabelText',
    Type: 'sting',
    Default: '-',
    Description: 'The label read when the rating input is empty.',
  },
];
