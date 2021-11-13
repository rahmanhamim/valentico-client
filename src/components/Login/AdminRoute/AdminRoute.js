import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
 const { user, admin, isLoading } = useAuth();

 if (isLoading || !admin || !user.email) {
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
    user.email && admin ? (
     children
    ) : (
     <Redirect
      to={{
       pathname: "/",
       state: { from: location },
      }}
     />
    )
   }
  />
 );
};

export default AdminRoute;
