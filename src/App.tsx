import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./modules/pages/Home";
import { Login } from "./modules/pages/Login";
import { Register } from "./modules/pages/Register";
import Layout from "./modules/pages/Layout";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
