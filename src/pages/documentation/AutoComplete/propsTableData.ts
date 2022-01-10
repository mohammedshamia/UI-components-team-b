export default [
  {
    id: '1',
    Name: 'option',
    Type: 'array',
    Default: '',
    Description: 'Array of options.',
  },
  {
    id: '3',
    Name: 'onChange',
    Type: 'Func',
    Default: '',
    Description: 'Callback fired when the value is changed.',
  },
  {
    id: '4',
    Name: 'name',
    Type: 'string',
    Default: '',
    Description: 'Name attribute of the input element.',
  },
  {
    id: '5',
    Name: 'placeholder',
    Type: 'string',
    Default: '',
    Description:
      'The short hint displayed in the input before the user enters a value.',
  },
  {
    id: '9',
    Name: 'disableCloseOnSelect',
    Type: 'bool',
    Default: 'false',
    Description: 'If true, the popup won not close when a value is selected.',
  },
  {
    id: '6',
    Name: 'renderOption',
    Type: 'JSX.Element',
    Default: '',
    Description:
      'function(props: object, option: T, state: object) => ReactNode props: The props to apply on the li element.option: The option to render.state: The state of the component',
  },
  {
    id: '7',
    Name: 'freeSolo',
    Type: 'bool',
    Default: 'false',
    Description:
      'If true, the Autocomplete is free solo, meaning that the user input is not bound to provided options',
  },
  {
    id: '2',
    Name: 'value',
    Type: 'string',
    Default: '',
    Description:
      'The value of the input element, required for a controlled component.',
  },
  {
    id: '8',
    Name: 'disabled',
    Type: 'bool',
    Default: 'false',
    Description: 'If true, the component is disabled.',
  },
  {
    id: '10',
    Name: 'disableClearable',
    Type: 'bool',
    Default: 'false',
    Description: 'If true, the input can not be cleared.',
  },
  {
    id: '11',
    Name: 'error',
    Type: 'string',
    Default: '',
    Description: ' the label is displayed in an error state',
  },
  {
    id: '12',
    Name: 'id',
    Type: 'string',
    Default: '',
    Description:
      'This prop is used to help implement the accessibility logic. If you do not provide an id it will fall back to a randomly generated one.',
  },
  {
    id: '13',
    Name: 'search',
    Type: 'bool',
    Default: 'false',
    Description:
      'If true, the Autocomplete is free solo, meaning that the user input is not bound to provided options and when OnClick Enter Go searching',
  },
  {
    id: '14',
    Name: 'width',
    Type: 'string',
    Default: '',
    Description: 'Custom Wdith',
  },
  {
    id: '15',
    Name: 'alignItem',
    Type: 'string',
    Default: 'start',
    Description: 'Dirction Option',
  },
  {
    id: '16',
    Name: 'startAdornment, endAdornment',
    Type: 'JSX.Element',
    Default: '',
    Description: 'Props Icon,button, as you like component',
  },
  {
    id: '16',
    Name: 'margin',
    Type: 'string',
    Default: '',
    Description: 'Custom Margin',
  },
];
