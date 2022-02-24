// import Counter from 'pages/Counter';
// import Pokemon from 'pages/Pokemon';
// import Home from 'pages/Home';
// import About from 'pages/About';
import { Spin } from 'antd';
import React, { lazy, Suspense } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const Counter = lazy(() => import('pages/Counter'));
const Pokemon = lazy(() => import('pages/Pokemon'));

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Spin />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<Spin />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="counter"
            element={
              <Suspense fallback={<Spin />}>
                <Counter />
              </Suspense>
            }
          />
          <Route
            path="pokemon"
            element={
              <Suspense fallback={<Spin />}>
                <Pokemon />
              </Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/counter">counter</Link>
          </li>
          <li>
            <Link to="/pokemon">pokemon</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
