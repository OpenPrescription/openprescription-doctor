import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Login,
  Home,
  PatientDataForm,
  NoMatch
} from "./screens";
import PrivateRoute from "./components/PrivateRoute";
import AskForBlockchainID from "./screens/AskForBlockchainID";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/blockchain-id" exact>
          <AskForBlockchainID />
        </Route>
        <PrivateRoute path="/patient-data" exact>
          <PatientDataForm />
        </PrivateRoute>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
