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
    main: '#0072E5',
    light: '#F0F7FF',
    dark: '#1565c0',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#9c27b0',
    light: '#ba68c8',
    dark: '#7b1fa2',
    contrastText: '#ffffff',
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
  },
  background: {
    paper: '#fefefe',
    default: '#fff',
    hover: 'rgba(0, 0, 0, 0.24)',
    blur: 'rgba(255,255,255,0.7)',
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
    light: '#ebeff31f',
    dark: '#1565c0',
    contrastText: 'rgba(0,0,0,0.87)',
  },
  secondary: {
    main: '#ce93d8',
    light: '#f3e5f5',
    dark: '#ab47bc',
    contrastText: '#ffffff',
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
  },
  background: {
    paper: '#232323',
    default: '#1e1e1e',
    hover: 'rgba(255, 255, 255, 0.24)',
    blur: 'rgba(30,30,30,0.7)',
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
