import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Components/pages/Home";
import { Films } from "./Components/pages/Films";
import { Film } from "./Components/pages/Film";
import { Sidebar } from "./Components/molecules/sidebar";
import { PublicRoute } from "./router/PublicRout";
import { PrivateRoute } from "./router/PrivateRout";
import { NotFound } from "./Components/atoms/notFound/NotFound";
import { Login } from "./Components/pages/Login";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <PublicRoute restricted={true} component={Home} path="/" exact />
          <PublicRoute
            restricted={true}
            component={Login}
            path="/login"
            exact
          />
          <PrivateRoute component={Films} path="/films" exact />
          <PrivateRoute component={Film} path="/films/:id" exact />
          <PublicRoute restricted={true} component={NotFound} exact /> */
        </Switch>
      </Router>
    </>
  );
}

export default App;
