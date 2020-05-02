import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Main from './pages/Main';
import About from './cmps/About';
import Projects from './cmps/Projects';
import Contact from './cmps/Contact';
import ProjectDetails from './pages/ProjectDetails';

import './styles/global.scss';

const history = createBrowserHistory();

function App() {
  return (<>
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route component={Main} path="/"></Route>
          <Route component={About} path="/about"></Route>
          <Route component={Projects} path="/projects"></Route>
          <Route component={Contact} path="/contact"></Route>
          <Route component={ProjectDetails} path="/:id"></Route>
        </Switch>
      </div>
    </Router>
  </>)
}

export default App;
