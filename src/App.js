import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage";

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </Switch>
  </div>
);

export default App;
