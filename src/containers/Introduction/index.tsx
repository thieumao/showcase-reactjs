import React from 'react';
import "./styles.scss";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import CaseStudyList from "../CaseStudyList";

const Introduction = () => {
  return (
    <div id="container">
      <h1>Introduction</h1>
      <p>Transforming Digital into Business Solutions</p>
      <p>We merge technical depth and business strategy to tailor-make digital products that turn innovation into your growth and profit.</p>
      <Link to="/projects">
        <b>TAP TO SEE OUR WORK</b>
      </Link>
      <Switch>
          <Route path="/projects">
            <CaseStudyList />
          </Route>
        </Switch>
    </div>
  );
}

export default Introduction;
