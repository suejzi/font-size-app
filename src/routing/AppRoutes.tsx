import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import Homepage from "../pages/home/Homepage";

import { AppRoute } from "./AppRoute.enum";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.Home} component={Homepage} />
      <Route path="*" component={NotFound} />
      <Redirect to={AppRoute.Home} />
    </Switch>
  );
};
