import { Spin } from 'antd';
import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const Counter = lazy(() => import('pages/Counter'));
const Pokemon = lazy(() => import('pages/Pokemon'));

export const ROUTERS = [
  {
    path: '/',
    component: (
      <Suspense fallback={<Spin />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/about',
    component: (
      <Suspense fallback={<Spin />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: '/counter',
    component: (
      <Suspense fallback={<Spin />}>
        <Counter />
      </Suspense>
    ),
  },
  {
    path: '/pokemon',
    component: (
      <Suspense fallback={<Spin />}>
        <Pokemon />
      </Suspense>
    ),
  },
];
