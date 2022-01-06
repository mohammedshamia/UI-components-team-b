import AllRoutes from './routes';
import WelcomeScreen from './pages/WelcomeScreen';
import { Navbar } from './components/layoutComponent';

function App() {
  return (
    <>
      <Navbar />
      {/* <WelcomeScreen /> */}
      <AllRoutes />
    </>
  );
}

export default App;
