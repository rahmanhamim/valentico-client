import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import MyOrders from "../MyOrders/MyOrders";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";

const Dashboard = () => {
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const toggleShow = () => setShow((s) => !s);

 const { logOut, admin } = useAuth();

 let { path, url } = useRouteMatch();

 return (
  <>
   <Offcanvas
    style={{ maxWidth: "300px" }}
    show={show}
    onHide={handleClose}
    scroll={true}
    backdrop={false}
   >
    <Offcanvas.Header closeButton>
     <Offcanvas.Title>Dashboard</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
     <button
      onClick={() => alert("Payment system coming soon!")}
      className="btn-regular d-block my-2"
     >
      Pay
     </button>
     <Link to="/dashboard" className="text-decoration-none">
      <button className="btn-regular d-block my-2">My Orders</button>
     </Link>
     <Link to={`${url}/review`} className="text-decoration-none">
      <button className="btn-regular d-block my-2">Review</button>
     </Link>
     {admin && (
      <div>
       <Link to={`${url}/manageallorders`} className="text-decoration-none">
        <button className="btn-regular d-block my-2">Manage All Orders</button>
       </Link>
       <Link to={`${url}/manageproducts`} className="text-decoration-none">
        <button className="btn-regular d-block my-2">Manage Product</button>
       </Link>
       <Link to={`${url}/makeadmin`} className="text-decoration-none">
        <button className="btn-regular d-block my-2">Make An Admin</button>
       </Link>
      </div>
     )}
     <Link to="/" className="text-decoration-none">
      <button className="btn-regular bg-success d-block my-2">
       Go back home
      </button>
     </Link>
     <button onClick={logOut} className="btn-regular bg-danger my-2">
      Logout
     </button>
    </Offcanvas.Body>
   </Offcanvas>
   <div className="container">
    <h1 className="text-muted mt-4">Dashboard</h1>
    <Button
     variant="primary"
     onClick={toggleShow}
     className="me-2 fs-5 btn-regular"
    >
     Manage
    </Button>
    <i className="fas fs-5 fa-cog text-muted"></i>
    <div>
     <Switch>
      <Route exact path={path}>
       <MyOrders></MyOrders>
      </Route>
      <Route path={`${path}/review`}>
       <h1>Review</h1>
      </Route>
      <AdminRoute path={`${path}/manageallorders`}>
       <ManageAllOrders></ManageAllOrders>
      </AdminRoute>
      <AdminRoute path={`${path}/manageproducts`}>
       <h1>Manage Products</h1>
      </AdminRoute>
      <AdminRoute path={`${path}/makeadmin`}>
       <MakeAdmin></MakeAdmin>
      </AdminRoute>
     </Switch>
    </div>
   </div>
  </>
 );
};

export default Dashboard;
