import React, { useContext } from 'react';
import { Route, Redirect ,useHistory,useLocation} from "react-router-dom";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    return (
        <Route
      {...rest}
      render={({ location }) =>
        (loggedInUser.email || sessionStorage.getItem('token')) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;