import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import {
  NavbarComponent,
  NavbarLink,
  NavbarSearchContainer,
  NavbarLinksIcon,
} from './style';
import { Avatar } from '../../baseComponent';
import logo from '../../../assets/logo.png';
import { SelectInput } from '../../baseComponent/Autocomplete';
// interface INavbar {}

const Navbar: React.FC<any> = ({ theme, setTheme }) => {
  const [searchValue, setSearchValue] = useState('');
  // const { pathname } = useLocation();
  // const IsMainPage = pathname.includes('components');
  // console.log(pathname);
  const handleChangeTheme = () => {
    if (theme.theme === 'light') {
      setTheme({ theme: 'dark' });
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme({ theme: 'light' });
      window.localStorage.setItem('theme', 'light');
    }
  };
  const handleChangeSearch = (newValue: string) => {
    setSearchValue(newValue);
  };
  return (
    <NavbarComponent>
      {/* {!IsMainPage && ( */}
      <div style={{ display: 'flex' }}>
        <Avatar src={logo} />
        <NavbarLink>Products</NavbarLink>
        <NavbarLink>Docs</NavbarLink>
        <NavbarLink>About us</NavbarLink>
      </div>
      {/* )} */}
      <NavbarSearchContainer>
        <SelectInput
          borderRadius="13px"
          search
          freeSolo
          value={searchValue}
          name="search"
          placeholder="search..."
          onChange={handleChangeSearch}
          option={[]}
          startAdornment={<i className="fas fa-search" />}
        />
        {/* <NavbarSearchContainer>
          <NavbarSearchIcon className="fas fa-search" />
        </NavbarSearchContainer> */}
        <NavbarLinksIcon
          className={theme.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}
          onClick={handleChangeTheme}
        />
      </NavbarSearchContainer>
    </NavbarComponent>
  );
};

export default Navbar;
