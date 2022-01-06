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

const Navbar: React.FC<any> = () => {
  const handleChangeTheme = () => {
    // console.log('change theme');
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
      <NavbarLinksIcon className="fas fa-moon" onClick={handleChangeTheme} />
    </NavbarComponent>
  );
};

export default Navbar;
