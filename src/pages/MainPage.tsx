// import { lazy } from 'react';
import { SideBar } from '../components/layoutComponent';
import 'react-code-container/dist/index.css';

// import Loadable from '../routes/Loading';

// const Docs = Loadable(lazy(() => import('./documentation/Avatar/index')));
const MainPage = () => {
  return (
    <SideBar />
    // <Docs />
  );
};

export default MainPage;
