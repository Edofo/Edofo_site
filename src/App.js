import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Portfolio = lazy(() => import("./pages/Portfolio"))
const Avis = lazy(() => import("./pages/Avis"))
const Contact = lazy(() => import("./pages/Contact"))
const Home = lazy(() => import("./pages/Home"))

const App = () => {
  return (
    <Router>
      
      <Suspense fallback={<div></div>}>
    
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

      </Suspense>

    </Router>
  );
}

export default App;
