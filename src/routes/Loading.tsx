import React, { Suspense, LazyExoticComponent, ComponentType } from 'react';

const Loader = () => <p> loaser ...</p>;
const Loadable =
  (
    Component:
      | LazyExoticComponent<() => JSX.Element>
      | ComponentType<React.ReactNode>,
  ) =>
  (props: any) =>
    (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
