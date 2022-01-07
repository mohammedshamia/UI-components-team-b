import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import AllRoutes from './routes';
import { Navbar } from './components/layoutComponent';
import WelcomeScreen from './pages/WelcomeScreen';
import AvatarDocs from './pages/documentation/Avatar';
import { GlobalStyle } from './Theme';
import { lightTheme, darkTheme } from './Theme/theme';
import Main from './pages/MainPage';

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
        <AvatarDocs />
        {/* <WelcomeScreen /> */}
        {/* <AllRoutes /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
