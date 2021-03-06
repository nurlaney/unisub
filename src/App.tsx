import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./modules/pages/Home";
import { Login } from "./modules/pages/Login";
import { Register } from "./modules/pages/Register";
import Layout from "./modules/pages/Layout";
import { PrivateRoute } from "./modules/PrivateRoute";
import { useState } from "react";
import { SpeedDialComponent } from "./modules/SpeedDial";
import { AddReminder } from "./modules/pages/AddReminder";
import { useDispatch } from "react-redux";
import { getReminder } from "./modules/pages/Reminder/actions";
import { EditReminder } from "./modules/pages/EditReminder";
// import { loginService } from "./modules/pages/Login/service";

function App() {
  // const token: any = localStorage.getItem("user");

  // useEffect(() => {
  //   loginService.checkUserExist(JSON.parse(token));
  // }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    getReminder(dispatch);
  }, [dispatch]);

  const [timelineView, setTimelineView] = useState(true);

  const handleTimelineView = () => {
    setTimelineView((prevState) => !prevState);
  };

  return (
    <Router>
      <Switch>
        <Layout>
          <PrivateRoute exact path="/">
            <div
              className="speedy"
              style={{ position: "fixed", right: "10px" }}
            >
              <SpeedDialComponent
                handleTimelineView={handleTimelineView}
                handleViewTimeline={timelineView}
              />
            </div>
            <Home timelineView={timelineView} />
          </PrivateRoute>
          <PrivateRoute exact path="/add-reminder">
            <AddReminder />
          </PrivateRoute>
          <PrivateRoute exact path="/edit-reminder/:id">
            <EditReminder />
          </PrivateRoute>
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
