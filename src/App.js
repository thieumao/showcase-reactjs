import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Introduction from './containers/Introduction';
import CaseStudyList from './containers/CaseStudyList';
import Topics from './containers/Topics';
import './App.scss';

const App = () => {
  return (
    <Router>
      <p className="main-menu clearfix">
        <ul className="menu-left">
          <li>
            <Link to="/"><b>Introduction</b></Link>
          </li>
          <li>
            <Link to="/projects"><b>Projects</b></Link>
          </li>
          <li>
            <Link to="/topics"><b>Topics</b></Link>
          </li>
        </ul>
      </p>
      <p>
      <Switch>
          <Route path="/projects">
            <CaseStudyList />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Introduction />
          </Route>
        </Switch>
      </p>
    </Router>
  );
}

export default App;