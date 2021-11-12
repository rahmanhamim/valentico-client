import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import MyOrders from "../MyOrders/MyOrders";
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link,
 useParams,
 useRouteMatch,
} from "react-router-dom";

const Dashboard = () => {
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const toggleShow = () => setShow((s) => !s);

 const { logOut } = useAuth();

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
     <Link to={`${url}/manageallorders`} className="text-decoration-none">
      <button className="btn-regular d-block my-2">Manage All Orders</button>
     </Link>
     <Link to={`${url}/manageproducts`} className="text-decoration-none">
      <button className="btn-regular d-block my-2">Manage Product</button>
     </Link>
     <Link to={`${url}/makeadmin`} className="text-decoration-none">
      <button className="btn-regular d-block my-2">Make An Admin</button>
     </Link>
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
      <Route path={`${path}/manageallorders`}>
       <h1>Manage All Orders</h1>
      </Route>
      <Route path={`${path}/manageproducts`}>
       <h1>Manage Products</h1>
      </Route>
      <Route path={`${path}/Make An Admin`}>
       <h1>Make An Admin</h1>
      </Route>
     </Switch>
    </div>
   </div>
  </>
 );
};

export default Dashboard;
