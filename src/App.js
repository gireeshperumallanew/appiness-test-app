import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login';
import Users from './components/users';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route exact path='/users' component={Users} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
