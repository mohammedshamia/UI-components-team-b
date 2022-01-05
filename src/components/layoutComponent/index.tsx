/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import paths from '../../routes/paths';
import MainLayout, { ContentSide, LeftSide, RightSide } from './style';

const Layout = () => {
  return (
    <MainLayout>
      <LeftSide>left side</LeftSide>
      <ContentSide>
        <Routes>
          <Route index element={() => <p>1111</p>} />
          {paths.map(x => (
            <Route path={x.name} element={x.element} />
          ))}
        </Routes>
      </ContentSide>
      <RightSide>right</RightSide>
    </MainLayout>
  );
};

export default Layout;
