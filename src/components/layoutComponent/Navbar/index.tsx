import { useCallback, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import {
  NavbarComponent,
  NavbarLink,
  NavbarSearchContainer,
  NavbarLinksIcon,
} from './style';
import logo from '../../../assets/logo.png';
import SelectInput from '../../baseComponent/Autocomplete/selectInput';

const Navbar: React.FC<any> = ({ theme, setTheme }) => {
  const [searchValue, setSearchValue] = useState('');
  const { pathname } = useLocation();
  const currentPath = pathname.split('/')[2];
  const IsMainPage = pathname.includes('installation');

  const handleChangeTheme = useCallback(() => {
    if (theme.theme === 'light') {
      setTheme({ theme: 'dark' });
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme({ theme: 'light' });
      localStorage.setItem('theme', 'light');
    }
  }, [theme, setTheme]);
  const handleChangeSearch = (newValue: string) => {
    setSearchValue(newValue);
  };
  return (
    <NavbarComponent IsMainPage={IsMainPage}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/">
          <img width="60px" src={logo} alt="logo" />
        </Link>
        {currentPath === undefined && (
          <>
            <NavbarLink to="/getting-started/installation">Products</NavbarLink>
            <NavbarLink to="/components">Docs</NavbarLink>
            <NavbarLink to="/getting-started/installation">About us</NavbarLink>
          </>
        )}
      </div>
      <NavbarSearchContainer>
        <SelectInput
          id="search"
          borderRadius="13px"
          search
          freeSolo
          value={searchValue}
          name="search"
          placeholder="search..."
          onChange={handleChangeSearch}
          option={Component.map(item => item.title)}
          startAdornment={<i className="fas fa-search" />}
        />
        <NavbarLinksIcon
          className={theme.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}
          onClick={handleChangeTheme}
        />
      </NavbarSearchContainer>
    </NavbarComponent>
  );
};

export default Navbar;
interface IsubNav {
  title: string;
  path: string;
}
const Component: IsubNav[] = [
  {
    title: 'autocomplete',
    path: '/components/autocomplete',
  },
  {
    title: 'avatar',
    path: '/components/avatar',
  },
  {
    title: 'card',
    path: '/components/card',
  },
  {
    title: 'rating',
    path: '/components/rating',
  },
  {
    title: 'typography',
    path: '/components/typography',
  },
];
