import {
  NavbarComponent,
  NavbarLink,
  NavbarSearchInput,
  NavbarSearchContainer,
  NavbarSearchIcon,
  NavbarLinksIcon,
} from './style';
import { Avatar } from '../../baseComponent';
import logo from '../../../assets/logo.png';
// interface INavbar {}

const Navbar: React.FC<any> = ({ theme, setTheme }) => {
  const handleChangeTheme = () => {
    if (theme.theme === 'light') {
      setTheme({ theme: 'dark' });
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme({ theme: 'light' });
      window.localStorage.setItem('theme', 'light');
    }
  };

  return (
    <NavbarComponent>
      <Avatar src={logo} />
      <NavbarLink>Products</NavbarLink>
      <NavbarLink>Docs</NavbarLink>
      <NavbarLink>About us</NavbarLink>
      <NavbarSearchContainer>
        <NavbarSearchInput as="input" placeholder="Search" />
        <NavbarSearchIcon className="fas fa-search" />
      </NavbarSearchContainer>
      <NavbarLinksIcon
        className={theme.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}
        onClick={handleChangeTheme}
      />
    </NavbarComponent>
  );
};

export default Navbar;
