import React from 'react';
import { Switch, Route } from "react-router-dom";

import routes from "./routes/routes"
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mainpage from './pages/Mainpage';
import Dashboard from './pages/Dashboard';
import Displaytable from './pages/Displaytable';
import Navbar from "./commonComponents/Navbar"
import Footersection from './commonComponents/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container p-1">
        <Switch>
        <Route path={routes.login}>
          <Login />
        </Route>
        <Route path={routes.signup}>
          <Signup />
        </Route>
        <Route path={routes.mainpage}>
          <Mainpage />
        </Route>
        <Route path={routes.dashboard}>
          <Dashboard />
        </Route>
        <Route path={routes.displaytable}>
          <Displaytable />
        </Route>
      </Switch>
      </div>
      <hr />
      <Footersection />
    </div>
  );
}

export default App;
