import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";

const IndexPage = React.lazy(() => import("./pages/IndexPage"));
const IntroPage = React.lazy(() => import("./pages/IntroPage"));
const AnalyticsAndDataPage = React.lazy(() => import("./pages/AnalyticsAndDataPage"));
const PrivacyPage = React.lazy(() => import("./pages/PrivacyPage"));
const AnalyticsAndPrivacy = React.lazy(() => import("./pages/AnalyticsAndPrivacyPage"));
const AnalyticsVsPrivacy = React.lazy(() => import("./pages/AnalyticsVsPrivacy"));
const ConclusionPage = React.lazy(() => import("./pages/ConclusionPage"));

const routes = [
  { path: "/", Component: IndexPage },
  { path: "/introduction", Component: IntroPage },
  { path: "/analytics-and-data", Component: AnalyticsAndDataPage },
  { path: "/privacy", Component: PrivacyPage },
  { path: "/analytics-and-privacy", Component: AnalyticsAndPrivacy },
  { path: "/analytics-vs-privacy", Component: AnalyticsVsPrivacy },
  { path: "/conclusion", Component: ConclusionPage },
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
