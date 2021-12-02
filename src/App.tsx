import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ROUTERS } from './router';

function App() {
  return (
    <Router>
      <Routes>
        {ROUTERS.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
