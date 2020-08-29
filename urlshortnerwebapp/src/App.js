import React from 'react';
import { Switch, Route } from "react-router-dom";
import "./App.css"
import routes from "./routes/routes"
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mainpage from './pages/Mainpage';
import Dashboard from './pages/Dashboard';
import Displaytable from './pages/Displaytable';
import Navbar from "./commonComponents/Navbar"
import Footersection from './commonComponents/Footer';
import Logout from './pages/Logout';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="bd-masthead custom-color">
        <div className="container ">
          <Switch>
            <Route exact path={routes.dashboard}>
              <Dashboard />
            </Route>
            <Route exact path={routes.login}>
              <Login />
            </Route>
            <Route exact path={routes.signup}>
              <Signup />
            </Route>
            <Route path={routes.logout}>
              <Logout />
            </Route>
            
            <Route path={routes.mainpage}>
              <Mainpage />
            </Route>
            <Route path={routes.displaytable}>
              <Displaytable />
            </Route>
          </Switch>
        </div>
      </main> 
      <Footersection />
    </div>
  );
}

export default App;
