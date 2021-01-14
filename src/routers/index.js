import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { css } from "@emotion/css";

import Home from "../routers/Home";
import GameDetail from "../routers/GameDetail";

export const container = css`
  padding: 50px;
`;

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/details/:app">
          <GameDetail />
        </Route>
        <Route path="*">
          <div className={container}>404 Not Found</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterComponent;
