import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarLink, SidebarLabel, DropdownLink } from './styles';

interface ISubItem {
  path: string;
  title: string;
}

function SubMenu({ item }: any) {
  const [subnav, setSubnav] = useState(true);
  const showSubnav = () => setSubnav(!subnav);

  const { pathname } = useLocation();
  const currentPath = pathname.split('/')[2];
  // const subTitle = useMemo(() => item.subNav, [pathname]);

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
        item.subNav?.map((subItem: ISubItem, index: number) => {
          return (
            <DropdownLink
              to={subItem.path}
              key={index}
              isActive={currentPath === subItem.path.split('/')[2]}
            >
              <SidebarLabel>{subItem.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
}

export default SubMenu;
