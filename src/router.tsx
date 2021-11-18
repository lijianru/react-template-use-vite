import { Spin } from 'antd';
import React, { lazy, Suspense, ComponentType } from 'react';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const Counter = lazy(() => import('pages/Counter'));
const Pokemon = lazy(() => import('pages/Pokemon'));

const wrappedSuspense = (Component: ComponentType) => (
  <Suspense fallback={<Spin />}>
    <Component />
  </Suspense>
);

export const ROUTERS = [
  {
    path: '/',
    component: () => wrappedSuspense(Home),
  },
  {
    path: '/about',
    component: () => wrappedSuspense(About),
  },
  {
    path: '/counter',
    component: () => wrappedSuspense(Counter),
  },
  {
    path: '/pokemon',
    component: () => wrappedSuspense(Pokemon),
  },
];
