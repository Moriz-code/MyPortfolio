import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Main from './pages/Main';
import About from './cmps/About';
import Projects from './cmps/Projects';
import Experience from './cmps/Experience';
import Contact from './cmps/Contact';

import './styles/global.scss';

const history = createBrowserHistory();

function App() {
  return (<>
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route component={Main} path="/" />
          <Route component={About} path="/about" />
          <Route component={Projects} path="/projects" />
          <Route component={Experience} path="/experience" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </div>
    </Router>
  </>)
}

export default App;
