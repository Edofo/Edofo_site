import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Portfolio from "./pages/Portfolio";
import Avis from "./pages/Avis";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/portfolio">
          <Portfolio />
        </Route>

        <Route path="/avis">
          <Avis />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
