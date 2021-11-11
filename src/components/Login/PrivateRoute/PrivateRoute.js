import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
 const { user, isLoading } = useAuth();

 if (isLoading) {
  return (
   <div className="text-center mx-auto m-5">
    <Spinner animation="grow" variant="warning" />
   </div>
  );
 }
 return (
  <Route
   {...rest}
   render={({ location }) =>
    user.email ? (
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
