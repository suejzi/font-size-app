import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import Main from "../pages/main/Main";

import { AppRoute } from "./AppRoute.enum";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.Main} component={Main} />
      <Route path="*" component={NotFound} />
      <Redirect to={AppRoute.Main} />
    </Switch>
  );
};
