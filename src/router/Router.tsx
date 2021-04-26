import React from "react";
import { Route, Switch } from "react-router";
import Contact from "../components/pages/Contact";
import Gallery from "../components/pages/Gallery";
import Home from "../components/pages/Home";
import Introduction from "../components/pages/Introduction";
import Page404 from "../components/pages/Page404";
import Recommendation from "../components/pages/Recommendation";

const Router: React.VFC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/introduction">
        <Introduction />
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
      <Route path="/recommendation">
        <Recommendation />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};

export default Router;
