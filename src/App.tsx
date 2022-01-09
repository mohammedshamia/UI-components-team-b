import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes';
import Navbar from './components/layoutComponent/Navbar';
import { GlobalStyle } from './Theme';
import { lightTheme, darkTheme } from './Theme/theme';

interface IState {
  theme: string;
}
function App() {
  const [state, setState] = useState<IState>({
    theme: '',
  });

  useEffect(() => {
    setState({
      theme: localStorage.theme || (localStorage.theme = 'light'),
    });
  }, []);
  return (
    <>
      <ThemeProvider theme={state.theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar theme={state} setTheme={setState} />
          <AllRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
