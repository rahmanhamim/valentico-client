import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const toggleShow = () => setShow((s) => !s);

 const { logOut } = useAuth();

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
     <button className="btn-regular d-block my-2">Pay</button>
     <Link to="" className="text-decoration-none">
      <button className="btn-regular d-block my-2">My Orders</button>
     </Link>
     <Link to="" className="text-decoration-none">
      <button className="btn-regular d-block my-2">Review</button>
     </Link>
     <button onClick={logOut} className="btn-regular bg-danger my-2">
      Logout
     </button>
    </Offcanvas.Body>
   </Offcanvas>
   <div className="container">
    <h1 className="text-muted mt-4">Dashboard</h1>
    <Button variant="primary" onClick={toggleShow} className="me-2 btn-regular">
     Manage
    </Button>
    <div></div>
   </div>
  </>
 );
};

export default Dashboard;
