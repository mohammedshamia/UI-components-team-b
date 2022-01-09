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
import SelectInput from '../../baseComponent/Autocomplete/selectInput';
// interface INavbar {}

const Navbar: React.FC<any> = ({ theme, setTheme }) => {
  const [searchValue, setSearchValue] = useState('');
  // const { pathname } = useLocation();
  // const IsMainPage = pathname.includes('components');
  // console.log(pathname);
  const handleChangeTheme = () => {
    if (theme.theme === 'light') {
      setTheme({ theme: 'dark' });
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme({ theme: 'light' });
      localStorage.setItem('theme', 'light');
    }
  };
  const handleChangeSearch = (newValue: string) => {
    setSearchValue(newValue);
  };
  return (
    <NavbarComponent>
      {/* {!IsMainPage && ( */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={logo} />
        <NavbarLink>Products</NavbarLink>
        <NavbarLink>Docs</NavbarLink>
        <NavbarLink>About us</NavbarLink>
      </div>
      {/* )} */}
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
          option={[]}
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
