import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from "react-router-dom";

import logo from "./logo.svg";
import AboutUsHeader from "./components/header";
import LandingPage from "./views/landing";
import routes from "./routes";
// import "./App.css";
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/react-demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.id}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
