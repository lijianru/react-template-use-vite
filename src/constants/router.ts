import { Counter } from 'pages/Counter';
import { About } from 'pages/About';
import { Home } from 'pages/Home';

export const ROUTERS = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/counter',
    component: Counter,
  },
];
