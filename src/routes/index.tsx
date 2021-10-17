import { Switch, Route } from "react-router-dom";

import Auth from "../pages/auth";
import Home from "../pages/home";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Auth} />
      <Route path="/home" component={Home} />
      <Route path="*" component={Auth} />
    </Switch>
  );
}
