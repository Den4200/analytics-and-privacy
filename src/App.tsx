import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";

const IndexPage = React.lazy(() => import("./pages/IndexPage"));
const IntroPage = React.lazy(() => import("./pages/IntroPage"));

const routes = [
  { path: "/", Component: IndexPage },
  { path: "/introduction", Component: IntroPage },
];

const App = () => (
  <Router>
    <Switch>
      {routes.map(({ path, Component }) => (
        <Route exact key={path} path={path}>
          <NavBar />

          <Suspense fallback={<Loading />}>
            <Component />
          </Suspense>
        </Route>
      ))}
    </Switch>
  </Router>
);

export default App;
