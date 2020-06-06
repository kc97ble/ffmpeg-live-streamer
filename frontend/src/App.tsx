import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import CommandListPage from "./components/CommandListPage";
import CommandPage from "./components/CommandPage";
import { COMMAND_LIST_URL, COMMAND_URL } from "common/utils/urls";

function App() {
  // return <pre>App</pre>;
  return (
    <Router>
      <Switch>
        <Route path={COMMAND_URL} component={CommandPage} />
        <Route path={COMMAND_LIST_URL} component={CommandListPage} />
        <Route path="/" exact>
          <p>
            <a href="/commands">Commands</a>
          </p>
        </Route>
        <Route path="/">
          <pre>Not found</pre>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
