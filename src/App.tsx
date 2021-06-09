import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";

const IndexPage = React.lazy(() => import("./pages/IndexPage"));
const IntroPage = React.lazy(() => import("./pages/IntroPage"));
const AnalyticsAndDataPage = React.lazy(() => import("./pages/AnalyticsAndDataPage"));
const PrivacyPage = React.lazy(() => import("./pages/PrivacyPage"));
const AnalyticsAndPrivacyPage = React.lazy(() => import("./pages/AnalyticsAndPrivacyPage"));
const AnalyticsVsPrivacyPage = React.lazy(() => import("./pages/AnalyticsVsPrivacy"));
const ConclusionPage = React.lazy(() => import("./pages/ConclusionPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));

const routes = [
  { path: "/", Component: IndexPage },
  { path: "/introduction", Component: IntroPage },
  { path: "/analytics-and-data", Component: AnalyticsAndDataPage },
  { path: "/privacy", Component: PrivacyPage },
  { path: "/analytics-and-privacy", Component: AnalyticsAndPrivacyPage },
  { path: "/analytics-vs-privacy", Component: AnalyticsVsPrivacyPage },
  { path: "/conclusion", Component: ConclusionPage },
  { path: "/about", Component: AboutPage },
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
