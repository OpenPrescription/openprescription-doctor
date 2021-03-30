import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Home, PatientDataForm, NoMatch, Supporters } from "./screens";
import PrivateRoute from "./components/PrivateRoute";
import AskForBlockchainID from "./screens/AskForBlockchainID";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
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
          <Route path="/supporters" exact>
            <Supporters />
          </Route>
          <PrivateRoute path="/patient-data" exact>
            <PatientDataForm />
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
