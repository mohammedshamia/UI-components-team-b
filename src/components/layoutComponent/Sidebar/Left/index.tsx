import React from 'react';
import { SidebarNav, SidebarWrap } from './styles';
import SidebarData from './SidebarData';
import SubMenu from './SubMenu';

const SidebarLeft = () => {
  return (
    <>
      <SidebarNav>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default SidebarLeft;
