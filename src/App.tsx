import React from 'react';
import logo from './logo.svg';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDetails from './pages/singleuser/UserDetails';
import Guarantor from './pages/guarantors/Guarantor';
import Loans from './pages/loans/Loans';
import DecisionModels from './pages/decisions_models/DecisionModels';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Home />
          </Route>
          <Route path="/users">
            <Home />
          </Route>
          <Route path="/guarantors">
            <Guarantor />
          </Route>
          <Route path="/loans">
            <Loans />
          </Route>
          <Route path="/models">
            <DecisionModels />
          </Route>
          <Route path="/user/:id">
            <UserDetails />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
