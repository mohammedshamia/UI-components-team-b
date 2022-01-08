import React, { useState } from 'react';
import { SidebarLink, SidebarLabel, DropdownLink } from './styles';

interface ISubItem {
  path: string;
  title: string;
}

function SubMenu({ item }: any) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((subItem: ISubItem, index: number) => {
          return (
            <DropdownLink to={subItem.path} key={index}>
              <SidebarLabel>{subItem.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
}

export default SubMenu;
