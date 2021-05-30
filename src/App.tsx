import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";

const IndexPage = React.lazy(() => import("./pages/IndexPage"));

const routes = [
  { path: "/", Component: IndexPage },
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
