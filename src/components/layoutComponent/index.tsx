/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import paths from '../../routes/paths';
import { handelPath } from '../../utils/handlePath';
import SidebarLeft from './Sidebar/SidebarLeft';
import MainLayout, {
  Contents,
  ContentSide,
  LeftSide,
  LinkItem,
  RightSide,
} from './Sidebar/style';

const Layout = () => {
  const location = useLocation();
  const currrentPath = location.pathname.split('/')[2];
  const rigthSide = useMemo(
    () => handelPath(paths, currrentPath),
    [location.pathname],
  );

  return (
    <MainLayout>
      <LeftSide>
        <SidebarLeft />
      </LeftSide>
      <ContentSide>
        <Routes>
          <Route index element={() => <p>1111</p>} />
          {paths.map(path => (
            <Route path={path.path} element={path.element} key={path.path} />
          ))}
        </Routes>
      </ContentSide>
      <RightSide>
        <Contents>Contents</Contents>
        <nav>
          {rigthSide.map(x => (
            <LinkItem to={`${x.toId}`}>{x.label}</LinkItem>
          ))}
        </nav>
      </RightSide>
    </MainLayout>
  );
};

export default Layout;
