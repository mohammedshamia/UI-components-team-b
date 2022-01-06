import styled from 'styled-components';

export const NavbarComponent = styled.div`
  // background: red;
  width: 100%;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 10%;
  // background: #000;
`;

export const NavbarLink = styled.li`
  color: #3e5060;
  padding: 10px;
  border-radius: 10px;
  list-style: none;
  display: inline-block;
  margin-left: 10px;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  &:hover {
    background: #f3f6f9;
  }
`;

export const NavbarSearchInput = styled.input`
  border: 0px solid #e5e5e5;
  border-radius: 10px;
  padding: 9px;
  background: #f3f6f9;
  width: 89%;
  margin-left: auto;
  font-size: 0.8rem;
  font-weight: thin;
  font-family: 'Roboto', sans-serif;
  &:focus {
    outline: none;
  }
`;

export const NavbarSearchContainer = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  background: #f3f6f9;
  width: 18em;
  margin-left: auto;
  font-size: 0.8rem;
  font-weight: thin;
  font-family: 'Roboto', sans-serif;
  &:focus {
    outline: none;
  }
`;

export const NavbarSearchIcon = styled.i`
  color: #3e5060;
`;

export const NavbarLinksIcon = styled.i`
  color: #3e5060;
  margin-left: 0.8rem;
  padding: 10px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  &:hover {
    background: #f3f6f9;
  }
`;
