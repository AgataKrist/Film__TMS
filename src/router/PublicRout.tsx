import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "./utils";

export const PublicRoute = ({
  component: Component,
  restricted,
  ...rest
}: any) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
{
  /* <PublicRoute restricted={true} component={Home} path="/" exact />
<PublicRoute
  restricted={true}
  component={Login}
  path="/login"
  exact
/>
<PrivateRoute component={User} path="/users/:id" exact />
<PrivateRoute component={Users} path="/users" exact />
<PublicRoute restricted={true} component={NotFound} exact /> */
}
