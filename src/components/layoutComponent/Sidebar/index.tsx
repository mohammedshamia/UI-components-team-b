/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import paths from '../../../routes/paths';

import { handelPath } from '../../../utils/handlePath';
import MainLayout, {
  Contents,
  ContentSide,
  LeftSide,
  LinkItem,
  RightSide,
} from './style';
import { Container } from '../Container';

const Layout = () => {
  const { hash, pathname } = useLocation();
  const currentPath = pathname.split('/')[2];

  const rightSide = useMemo(() => handelPath(paths, currentPath), [pathname]);

  return (
    <MainLayout>
      <LeftSide>LEFT SIDE </LeftSide>
      <ContentSide>
        <Container>
          <Routes>
            <Route index element={() => <p>1111</p>} />
            {/* // hre  you need  to  add  the other  path  here  or  add  in the   in path  paths  file  */}
            <Route path="about" element={<p>about</p>} />
            <Route path="install" element={<p>install2</p>} />
            {paths.map(path => (
              <Route path={path.path} element={path.element} key={path.path} />
            ))}
          </Routes>
        </Container>
      </ContentSide>
      <RightSide>
        <Contents>Contents</Contents>
        <nav>
          {rightSide.map(x => (
            <LinkItem to={`${x.toId}`} isActive={x.toId === hash}>
              {x.label}
            </LinkItem>
          ))}
        </nav>
      </RightSide>
    </MainLayout>
  );
};

export default Layout;
