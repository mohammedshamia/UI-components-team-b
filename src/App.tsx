import React, { useEffect, useState } from 'react';
// import AllRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import TableProps from './components/layoutComponent/table';

import AllRoutes from './routes';
import { Navbar } from './components/layoutComponent';
import WelcomeScreen from './pages/WelcomeScreen';
import { GlobalStyle } from './Theme';
import { lightTheme, darkTheme } from './Theme/theme';
// import Main from './pages/MainPage';

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
        <Navbar theme={state} setTheme={setState} />
        {/* <Main /> */}
        <WelcomeScreen />
        <AllRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
