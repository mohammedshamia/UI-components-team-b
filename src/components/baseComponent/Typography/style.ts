import styled from 'styled-components';

const getTypographySize = (variant: string) => {
  switch (variant) {
    case 'h1':
      return '4em';

    case 'h2':
      return '2em';
    case 'h3':
      return '1.5em';
    case 'h4':
      return '1.25em';
    case 'h5':
      return '1em';
    case 'h6':
      return '0.75em';
    default:
      return '1em';
  }
};

const Wrapper = styled.div<any>`
  color: ${props => props.color || 'black'};
  font-weight: ${props => (props?.bold ? 750 : 500)};
  color: ${props => props?.color || props.theme.text.primary};
  font-size: ${props =>
    props?.fontSize || getTypographySize(props?.variant || '')};
  width: ${props => props?.width || '100%'};
  line-height: ${props => (props?.bold ? 1.1 : 1.25)};
  ${props =>
    Object.keys(props)
      .map((key: any) => `${key}: ${props?.[key]};`)
      .join(';')};
  .ui {
    background: linear-gradient(to right, #007fff, #0059b2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default Wrapper;
