import { DefaultTheme } from 'styled-components';

const commonTheme = {
  typography: {
    fontSize: 14,
    h1: {
      fontSize: '6rem',
      fontWeight: 300,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '3.75rem',
      fontWeight: 300,
      letterSpacing: '-0.00833em',
    },
  },
};

export const lightTheme: DefaultTheme = {
  ...commonTheme,
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#ffffff',
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
  },
  background: {
    paper: '#fff',
    default: '#fff',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disable: ' rgba(0, 0, 0, 0.38)',
  },
  common: {
    black: '#000',
    white: '#fff',
  },
};
export const darkTheme: DefaultTheme = {
  ...commonTheme,
  primary: {
    main: '#90caf9',
    light: '#e3f2fd',
    dark: '#42a5f5',
    contrastText: 'rgba(0,0,0,0.87)',
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
  },
  background: {
    paper: '#121212',
    default: '#121212',
  },
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disable: 'rgba(255, 255, 255, 0.5)',
  },
  common: {
    black: '#000',
    white: '#fff',
  },
};
