import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import CreateAdmin from "./components/Dashboard/Dashboard/CreateAdmin/CreateAdmin";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AddFeedback from "./components/Dashboard/AddFeedback/AddFeedback";
import AddService from "./components/Dashboard/AddService/AddService";
import ServiceList from "./components/Dashboard/ServicesList/ServicesList";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                  <Switch>
                        <Route path="/home">
                                                <Home></Home>
                        </Route>
                        <Route exact path="/">
                                                <Home></Home>     
                        </Route>
                        <Route path="/login">
                                                <Login></Login>
                        </Route>
                        <PrivateRoute path="/dashboard/">
                                                <Dashboard></Dashboard>
                        </PrivateRoute>

                        <Route path="/admin/">
                                                <CreateAdmin></CreateAdmin>
                        </Route>

                        <Route path="/order">
                                                <Dashboard></Dashboard>
                        </Route>
                        <Route path="/serviceList">
                                                <ServiceList></ServiceList>
                        </Route>
                        <Route path="/review">
                                                <AddFeedback></AddFeedback>
                        </Route>
                        <Route path="/adminServiceList">
                                               
                        </Route>
                        <Route path="/addService">
                                                <AddService></AddService>
                        </Route>
                        <Route path="/createAdmin">
                                                <CreateAdmin></CreateAdmin>
                        </Route>
                        <Route path="*">
                                                <NotFound></NotFound>
                        </Route>
                  </Switch>
            </Router>
    </UserContext.Provider>
  );
}

export default App;
