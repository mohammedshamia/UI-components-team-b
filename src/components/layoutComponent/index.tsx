/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import paths from '../../routes/paths';
import MainLayout, { ContentSide, LeftSide, RightSide } from './style';

const Layout = () => {
  return (
    <MainLayout>
      <LeftSide>left side</LeftSide>
      <ContentSide>
        ssssssssssssssssss
        <Routes>
          {/* <Route path="/" element={<Outlet />}> */}
          <Route index element={() => <p>1111</p>} />
          {paths.map(x => (
            <Route path={x.name} element={x.element} />
          ))}
          {/* <Route path="page2" element={<p>1111</p>} />
          <Route path="page3" element={<p>1111</p>} /> */}
          {/* </Route> */}
        </Routes>
      </ContentSide>
      <RightSide>right</RightSide>
    </MainLayout>
  );
};

export default Layout;
