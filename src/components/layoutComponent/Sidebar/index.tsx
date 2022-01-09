import { useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import paths from '../../../routes/paths';
import SidebarLeft from './Left';

import { handelPath } from '../../../utils/handlePath';
import MainLayout, {
  Contents,
  ContentSide,
  LeftSide,
  LinkItem,
  RightSide,
} from './style';
import { Container } from '../Container';
import InstallPage from '../../../pages/installPage';

const Layout = () => {
  const { hash, pathname } = useLocation();
  const currentPath = pathname.split('/')[2];
  const goToViolation = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    }) as any;
  };
  const rightSide = useMemo(() => handelPath(paths, currentPath), [pathname]);

  return (
    <MainLayout>
      <LeftSide>
        <SidebarLeft />
      </LeftSide>
      <ContentSide>
        <Container>
          <Routes>
            <Route index element={() => <p>1111</p>} />
            <Route path="about" element={<p>about</p>} />
            <Route path="install" element={<InstallPage />} />
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
            <LinkItem
              to={`${x.toId}`}
              isActive={x.toId === hash}
              onClick={() => goToViolation(x.toId.slice(1))}
            >
              {x.label}
            </LinkItem>
          ))}
        </nav>
      </RightSide>
    </MainLayout>
  );
};

export default Layout;
