import { ROUTERS } from 'constants/router';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        {ROUTERS.map(({ path, component }) => (
          <Route exact key={path} path={path} component={component} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
