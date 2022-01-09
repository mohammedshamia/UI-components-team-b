import React, { useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import paths from '../../../routes/paths';
import SidebarLeft from './SidebarLeft';

import { handelPath } from '../../../utils/handlePath';
import MainLayout, {
  Contents,
  ContentSide,
  LeftSide,
  LinkItem,
  RightSide,
} from './style';
import { Container } from '../Container';
import Loadable from '../../../routes/Loading';
import TableProps from '../TableProps';
import { data } from '../TableProps/data';

const AvatarDocumentation = Loadable(
  React.lazy(() => import('../../../pages/documentation/Avatar')),
);

const Layout = () => {
  const { hash, pathname } = useLocation();
  const currentPath = pathname.split('/')[2];

  const rightSide = useMemo(() => handelPath(paths, currentPath), [pathname]);

  return (
    <MainLayout>
      <LeftSide>
        <SidebarLeft />
      </LeftSide>
      <ContentSide>
        <Container>
          <AvatarDocumentation />
          <Routes>
            <Route index element={() => <p>1111</p>} />
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
