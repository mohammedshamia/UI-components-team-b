import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    error: {
      main: string;
      light: string;
      dark: string;
    };
    background: {
      paper: string;
      default: string;
      hover: string;
      blur: string;
    };
    text: {
      primary: string;
      secondary: string;
      disable: string;
    };
    common: {
      black: string;
      white: string;
    };
  }
}
